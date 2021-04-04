'use strict';

import { ApiProperty } from '@nestjs/swagger';

import { ClassroomEntity } from '../../classroom/classroom.entity';
import { UserEntity } from '../user.entity';
import { UserDto } from './UserDto';

export class StudentDto extends UserDto {
    @ApiProperty()
    studentCode: string;

    @ApiProperty({ type: ClassroomEntity })
    class: ClassroomEntity;

    @ApiProperty()
    yearOfAdmission: Date;

    constructor(student: UserEntity) {
        super(student);
        this.studentCode = student.studentCode;
        this.class = student.class;
        this.yearOfAdmission = student.yearOfAdmission;
    }
}
