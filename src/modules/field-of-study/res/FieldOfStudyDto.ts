'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { MajorEntity } from '../../major/major.entity';
import { FieldOfStudyEntity } from '../field-of-study.entity';

export class FieldOfStudyDto extends AbstractDto {
    @ApiProperty()
    fieldOfStudyCode: string;

    @ApiProperty()
    fieldOfStudyName: string;

    @ApiProperty({ type: MajorEntity })
    major: MajorEntity;

    constructor(fieldOfStudy: FieldOfStudyEntity) {
        super(fieldOfStudy);
        this.fieldOfStudyCode = fieldOfStudy.fieldOfStudyCode;
        this.fieldOfStudyName = fieldOfStudy.fieldOfStudyName;
        this.major = fieldOfStudy.major;
    }
}
