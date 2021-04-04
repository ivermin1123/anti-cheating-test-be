import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { GenderType } from '../../common/constants/gender';
import { RoleType } from '../../common/constants/role-type';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { ClassroomEntity } from '../classroom/classroom.entity';
import { FieldOfStudyEntity } from '../field-of-study/field-of-study.entity';
import { StudentAnswerEntity } from '../student-answer/student-answer.entity';
import { UserDto } from './res/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    studentCode: string;

    @ManyToOne((_type) => ClassroomEntity, (classroom) => classroom.students)
    class: ClassroomEntity;

    @ManyToOne(
        (_type) => FieldOfStudyEntity,
        (fieldOfStudy) => fieldOfStudy.students,
    )
    fieldOfStudy: FieldOfStudyEntity;

    @OneToMany(
        (_type) => StudentAnswerEntity,
        (studentAnswer) => studentAnswer.user,
    )
    studentAnswers: StudentAnswerEntity[];

    @Column({ nullable: true })
    yearOfAdmission: Date;

    @Column({ type: 'enum', enum: GenderType, default: GenderType.MAN })
    gender: GenderType;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.STUDENT })
    role: RoleType;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    address: string;

    @VirtualColumn()
    fullName: string;

    dtoClass = UserDto;
}
