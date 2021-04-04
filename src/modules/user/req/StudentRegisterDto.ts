import { ApiProperty } from '@nestjs/swagger';
import {
    IsDate,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';
import { Column } from 'typeorm';

import { GenderType } from '../../../common/constants/gender';
import { Trim } from '../../../decorators/transforms.decorator';

export class StudentRegisterDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Trim()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Trim()
    readonly lastName: string;

    @ApiProperty()
    @IsEnum(GenderType)
    @IsNotEmpty()
    @Trim()
    readonly gender: GenderType;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Trim()
    readonly classCode: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @Trim()
    readonly yearOfAdmission: Date;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Trim()
    readonly email: string;

    @ApiProperty({ minLength: 6 })
    @IsString()
    @MinLength(6)
    readonly password: string;

    @ApiProperty()
    @Column()
    @IsPhoneNumber('84')
    @IsOptional()
    phone: string;
}
