import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ClassroomEntity } from './classroom.entity';

@EntityRepository(ClassroomEntity)
export class ClassroomRepository extends Repository<ClassroomEntity> {}
