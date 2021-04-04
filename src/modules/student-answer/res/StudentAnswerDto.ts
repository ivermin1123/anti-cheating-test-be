'use strict';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AnswerType } from '../../../common/constants/answer-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { StudentAnswerEntity } from '../student-answer.entity';

export class StudentAnswerDto extends AbstractDto {
    @ApiPropertyOptional()
    answerText: string;

    @ApiPropertyOptional({ enum: AnswerType })
    answerChoice: AnswerType;

    @ApiProperty()
    answerDate: Date;

    constructor(studentAnswer: StudentAnswerEntity) {
        super(studentAnswer);
        this.answerText = studentAnswer.answerText;
        this.answerDate = studentAnswer.answerDate;
        this.answerChoice = studentAnswer.answerChoice;
    }
}
