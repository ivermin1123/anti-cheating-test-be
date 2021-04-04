'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { QuestionType } from '../../../common/constants/question-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { QuestionEntity } from '../question.entity';

export class QuestionDto extends AbstractDto {
    @ApiProperty()
    questionText: string;

    @ApiProperty({ enum: QuestionType })
    questionType: QuestionType;

    constructor(question: QuestionEntity) {
        super(question);
        this.questionText = question.questionText;
        this.questionType = question.questionType;
    }
}
