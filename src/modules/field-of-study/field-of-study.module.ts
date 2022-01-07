import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FieldOfStudyController } from './field-of-study.controller';
import { FieldOfStudyRepository } from './field-of-study.repository';
import { FieldOfStudyService } from './field-of-study.service';

@Module({
    imports: [TypeOrmModule.forFeature([FieldOfStudyRepository])],
    controllers: [FieldOfStudyController],
    exports: [FieldOfStudyService],
    providers: [FieldOfStudyService],
})
export class FieldOfStudyModule {}
