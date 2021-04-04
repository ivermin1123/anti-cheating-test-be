'use strict';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { GenderType } from '../../../common/constants/gender';
import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    firstName: string;

    @ApiPropertyOptional()
    lastName: string;

    @ApiProperty()
    username: string;

    @ApiProperty({ enum: GenderType })
    gender: GenderType;

    @ApiProperty({ enum: RoleType })
    role: RoleType;

    @ApiProperty()
    email: string;

    @ApiPropertyOptional()
    avatar: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    dateOfBirth: Date;

    @ApiProperty()
    address: string;

    constructor(user: UserEntity) {
        super(user);
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.gender = user.gender;
        this.role = user.role;
        this.email = user.email;
        this.avatar = user.avatar;
        this.phone = user.phone;
        this.dateOfBirth = user.dateOfBirth;
        this.address = user.address;
    }
}
