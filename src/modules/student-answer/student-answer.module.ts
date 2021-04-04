import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentAnswerController } from './student-answer.controller';
import { StudentAnswerRepository } from './student-answer.repository';
import { StudentAnswerService } from './student-answer.service';

@Module({
    imports: [TypeOrmModule.forFeature([StudentAnswerRepository])],
    controllers: [StudentAnswerController, StudentAnswerController],
    exports: [StudentAnswerService],
    providers: [StudentAnswerService, StudentAnswerService],
})
export class StudentAnswerModule {}
