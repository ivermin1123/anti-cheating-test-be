'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { MajorEntity } from '../major.entity';

export class MajorDto extends AbstractDto {
    @ApiProperty()
    majorCode: string;

    @ApiProperty()
    majorName: string;

    constructor(major: MajorEntity) {
        super(major);
        this.majorCode = major.majorCode;
        this.majorName = major.majorName;
    }
}
