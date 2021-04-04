import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExamController } from './exam.controller';
import { ExamRepository } from './exam.repository';
import { ExamService } from './exam.service';

@Module({
    imports: [TypeOrmModule.forFeature([ExamRepository])],
    controllers: [ExamController, ExamController],
    exports: [ExamService],
    providers: [ExamService, ExamService],
})
export class ExamModule {}
