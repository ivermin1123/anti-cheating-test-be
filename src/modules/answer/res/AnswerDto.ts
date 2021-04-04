'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AnswerType } from '../../../common/constants/answer-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { AnswerEntity } from '../answer.entity';

export class AnswerDto extends AbstractDto {
    @ApiPropertyOptional()
    answerText: string;

    @ApiPropertyOptional({ enum: AnswerType })
    answerChoice: AnswerType;

    constructor(major: AnswerEntity) {
        super(major);
        this.answerText = major.answerText;
        this.answerChoice = major.answerChoice;
    }
}
