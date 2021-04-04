import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ExamEntity } from './exam.entity';

@EntityRepository(ExamEntity)
export class ExamRepository extends Repository<ExamEntity> {}
