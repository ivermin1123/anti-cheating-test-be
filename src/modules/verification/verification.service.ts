import { Injectable } from '@nestjs/common';

import { IFile } from '../../interfaces/IFile';
import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { VerificationApiService } from '../../shared/services/verification-api.service';
import { VerifyDto } from './req/VerifyDto';

@Injectable()
export class VerificationService {
    constructor(
        public readonly awsService: AwsS3Service,
        public readonly verificationApiService: VerificationApiService,
    ) {}

    async verify(_verifyDto: VerifyDto, file: IFile): Promise<boolean> {
        const link =
            'https://anti-cheating-test-bucket.s3.ap-southeast-1.amazonaws.com/images/3260bf10-9c50-11eb-a7c8-415e0b3a5f03.jpeg';
        const url = await this.awsService.uploadImage(file);

        await this.verificationApiService.verify(link, url);

        return true;
    }
}
