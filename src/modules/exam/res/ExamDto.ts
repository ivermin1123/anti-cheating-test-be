'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ExamEntity } from '../exam.entity';

export class ExamDto extends AbstractDto {
    @ApiProperty()
    examName: string;

    @ApiProperty()
    examDate: Date;

    @ApiProperty()
    examDescription: string;

    constructor(exam: ExamEntity) {
        super(exam);
        this.examName = exam.examName;
        this.examDate = exam.examDate;
        this.examDescription = exam.examDescription;
    }
}
