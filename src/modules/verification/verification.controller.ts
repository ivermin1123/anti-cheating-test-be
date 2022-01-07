import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';

import { ApiFile } from '../../decorators/swagger.schema';
import { IFile } from '../../interfaces/IFile';
import { VerifyDto } from './req/VerifyDto';
import { VerificationService } from './verification.service';

@Controller('verification')
@ApiTags('verification')
export class VerificationController {
    constructor(private verificationService: VerificationService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiConsumes('multipart/form-data')
    @ApiFile([{ name: 'image' }])
    @UseInterceptors(FileInterceptor('image'))
    async userRegister(
        @Body() verifyDto: VerifyDto,
        @UploadedFile() file: IFile,
    ): Promise<boolean> {
        const isVerify = await this.verificationService.verify(verifyDto, file);

        // eslint-disable-next-line @typescript-eslint/tslint/config
        return isVerify;
    }
}
