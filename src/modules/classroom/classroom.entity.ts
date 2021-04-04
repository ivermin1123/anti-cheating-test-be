import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { TrainingType } from '../../common/constants/type-of-training';
import { UserEntity } from '../user/user.entity';
import { ClassroomDto } from './res/ClassroomDto';

@Entity({ name: 'classrooms' })
export class ClassroomEntity extends AbstractEntity<ClassroomDto> {
    @Column()
    classCode: string;

    @Column()
    quantityOfStudent: number;

    @Column({
        type: 'enum',
        enum: TrainingType,
        default: TrainingType.INTER_COLLEGE_TRANSFER,
    })
    typeOfTraining: TrainingType;

    @Column()
    term: number;

    @Column()
    startDate: Date;

    @OneToMany(() => UserEntity, (user) => user.class)
    students: UserEntity[];

    dtoClass = ClassroomDto;
}
