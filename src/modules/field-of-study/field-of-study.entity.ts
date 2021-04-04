import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { MajorEntity } from '../major/major.entity';
import { UserEntity } from '../user/user.entity';
import { FieldOfStudyDto } from './res/FieldOfStudyDto';

@Entity({ name: 'field-of-studies' })
export class FieldOfStudyEntity extends AbstractEntity<FieldOfStudyDto> {
    @Column()
    fieldOfStudyCode: string;

    @Column()
    fieldOfStudyName: string;

    @ManyToOne((_type) => MajorEntity, (major) => major.fieldOfStudies)
    major: MajorEntity;

    @ManyToOne((_type) => UserEntity, (user) => user.fieldOfStudy)
    students: UserEntity[];

    dtoClass = FieldOfStudyDto;
}
