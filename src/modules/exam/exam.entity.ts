import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { QuestionEntity } from '../question/question.entity';
import { StudentAnswerEntity } from '../student-answer/student-answer.entity';
import { SubjectEntity } from '../subject/subject.entity';
import { ExamDto } from './res/ExamDto';

@Entity({ name: 'exams' })
export class ExamEntity extends AbstractEntity<ExamDto> {
    @Column()
    examName: string;

    @Column()
    examDate: Date;

    @Column()
    examDescription: string;

    @ManyToOne(() => SubjectEntity, (subject) => subject.exams)
    subject: SubjectEntity;

    @ManyToMany((_type) => QuestionEntity, (question) => question.exams)
    @JoinTable()
    questions: QuestionEntity[];

    @OneToMany(
        (_type) => StudentAnswerEntity,
        (studentAnswer) => studentAnswer.exam,
    )
    studentAnswers: StudentAnswerEntity[];

    dtoClass = ExamDto;
}
