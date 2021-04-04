import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { StudentAnswerEntity } from './student-answer.entity';

@EntityRepository(StudentAnswerEntity)
export class StudentAnswerRepository extends Repository<StudentAnswerEntity> {}
