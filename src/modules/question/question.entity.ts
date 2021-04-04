import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { QuestionType } from '../../common/constants/question-type';
import { AnswerEntity } from '../answer/answer.entity';
import { ExamEntity } from '../exam/exam.entity';
import { StudentAnswerEntity } from '../student-answer/student-answer.entity';
import { QuestionDto } from './res/QuestionDto';

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity<QuestionDto> {
    @Column()
    questionText: string;

    @Column({
        type: 'enum',
        enum: QuestionType,
        default: QuestionType.MULTIPLE_CHOICE,
    })
    questionType: QuestionType;

    @OneToMany(() => AnswerEntity, (answer) => answer.question)
    answers: AnswerEntity[];

    @ManyToMany((_type) => ExamEntity, (exam) => exam.questions)
    exams: ExamEntity[];

    @OneToMany(() => StudentAnswerEntity, (answer) => answer.question)
    studentAnswers: StudentAnswerEntity[];

    dtoClass = QuestionDto;
}
