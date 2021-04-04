'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { TrainingType } from '../../../common/constants/type-of-training';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { ClassroomEntity } from '../classroom.entity';

export class ClassroomDto extends AbstractDto {
    @ApiProperty()
    classCode: string;

    @ApiProperty()
    quantityOfStudent: number;

    @ApiProperty({ enum: TrainingType })
    typeOfTraining: TrainingType;

    @ApiProperty()
    term: number;

    @ApiProperty()
    startDate: Date;

    constructor(classroom: ClassroomEntity) {
        super(classroom);
        this.classCode = classroom.classCode;
        this.quantityOfStudent = classroom.quantityOfStudent;
        this.typeOfTraining = classroom.typeOfTraining;
        this.term = classroom.term;
        this.startDate = classroom.startDate;
    }
}
