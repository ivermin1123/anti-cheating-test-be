import { Module } from '@nestjs/common';

import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';

@Module({
    controllers: [VerificationController],
    exports: [VerificationService],
    providers: [VerificationService],
})
export class VerificationModule {}
