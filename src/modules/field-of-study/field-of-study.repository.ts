import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { FieldOfStudyEntity } from './field-of-study.entity';

@EntityRepository(FieldOfStudyEntity)
export class FieldOfStudyRepository extends Repository<FieldOfStudyEntity> {}
