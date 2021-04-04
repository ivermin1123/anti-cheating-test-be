import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuestionController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuestionRepository])],
    controllers: [QuestionController, QuestionController],
    exports: [QuestionService],
    providers: [QuestionService, QuestionService],
})
export class QuestionModule {}
