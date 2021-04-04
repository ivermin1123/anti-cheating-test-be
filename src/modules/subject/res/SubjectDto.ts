'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { SubjectEntity } from '../subject.entity';

export class SubjectDto extends AbstractDto {
    @ApiProperty()
    subjectCode: string;

    @ApiProperty()
    subjectName: string;

    constructor(subject: SubjectEntity) {
        super(subject);
        this.subjectCode = subject.subjectCode;
        this.subjectName = subject.subjectName;
    }
}
