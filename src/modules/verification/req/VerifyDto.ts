import { ApiProperty } from '@nestjs/swagger';

import { Trim } from '../../../decorators/transforms.decorator';

export class VerifyDto {
    @ApiProperty()
    @Trim()
    readonly studentCode: string;
}
