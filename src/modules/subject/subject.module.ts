import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubjectController } from './subject.controller';
import { SubjectRepository } from './subject.repository';
import { SubjectService } from './subject.service';

@Module({
    imports: [TypeOrmModule.forFeature([SubjectRepository])],
    controllers: [SubjectController, SubjectController],
    exports: [SubjectService],
    providers: [SubjectService, SubjectService],
})
export class SubjectModule {}
