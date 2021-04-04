import { Column, Entity, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { AnswerType } from '../../common/constants/answer-type';
import { QuestionEntity } from '../question/question.entity';
import { AnswerDto } from './res/AnswerDto';

@Entity({ name: 'answers' })
export class AnswerEntity extends AbstractEntity<AnswerDto> {
    @Column({ nullable: true })
    answerText: string;

    @Column({
        type: 'enum',
        enum: AnswerType,
        nullable: true,
    })
    answerChoice: AnswerType;

    @ManyToOne((_type) => QuestionEntity, (question) => question.answers)
    question: QuestionEntity;

    dtoClass = AnswerDto;
}
