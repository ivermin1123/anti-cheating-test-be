import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { ExamEntity } from '../exam/exam.entity';
import { MajorEntity } from '../major/major.entity';
import { SubjectDto } from './res/SubjectDto';

@Entity({ name: 'subjects' })
export class SubjectEntity extends AbstractEntity<SubjectDto> {
    @Column()
    subjectCode: string;

    @Column()
    subjectName: string;

    @ManyToOne(() => MajorEntity, (major) => major.subjects)
    major: MajorEntity;

    @OneToMany(() => ExamEntity, (exam) => exam.subject)
    exams: ExamEntity[];

    dtoClass = SubjectDto;
}
