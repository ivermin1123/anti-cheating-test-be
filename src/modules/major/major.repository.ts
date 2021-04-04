import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { MajorEntity } from './major.entity';

@EntityRepository(MajorEntity)
export class MajorRepository extends Repository<MajorEntity> {}
