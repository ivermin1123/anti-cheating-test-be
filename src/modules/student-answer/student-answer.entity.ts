import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { AnswerType } from '../../common/constants/answer-type';
import { ExamEntity } from '../exam/exam.entity';
import { QuestionEntity } from '../question/question.entity';
import { UserEntity } from '../user/user.entity';
import { StudentAnswerDto } from './res/StudentAnswerDto';

@Entity({ name: 'student-answers' })
export class StudentAnswerEntity extends AbstractEntity<StudentAnswerDto> {
    @ManyToOne((_type) => UserEntity, (user) => user.studentAnswers, {
        primary: true,
    })
    user: UserEntity;

    @ManyToOne((_type) => ExamEntity, (exam) => exam.studentAnswers, {
        primary: true,
    })
    exam: ExamEntity;

    @Column({ nullable: true })
    answerText: string;

    @Column()
    answerDate: Date;

    @Column({
        type: 'enum',
        enum: AnswerType,
        nullable: true,
    })
    answerChoice: AnswerType;

    @ManyToOne((_type) => QuestionEntity, (question) => question.studentAnswers)
    question: QuestionEntity;

    dtoClass = StudentAnswerDto;
}
