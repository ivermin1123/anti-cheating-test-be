import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { SubjectEntity } from './subject.entity';

@EntityRepository(SubjectEntity)
export class SubjectRepository extends Repository<SubjectEntity> {}
