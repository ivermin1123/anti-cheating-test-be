import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { FieldOfStudyEntity } from '../field-of-study/field-of-study.entity';
import { SubjectEntity } from '../subject/subject.entity';
import { MajorDto } from './res/MajorDto';

@Entity({ name: 'majors' })
export class MajorEntity extends AbstractEntity<MajorDto> {
    @Column()
    majorCode: string;

    @Column()
    majorName: string;

    @OneToMany(() => FieldOfStudyEntity, (fieldOfStudy) => fieldOfStudy.major)
    fieldOfStudies: FieldOfStudyEntity[];

    @OneToMany(() => SubjectEntity, (subject) => subject.major)
    subjects: SubjectEntity[];

    dtoClass = MajorDto;
}
