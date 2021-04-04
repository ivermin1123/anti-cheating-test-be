import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClassroomController } from './classroom.controller';
import { ClassroomRepository } from './classroom.repository';
import { ClassroomService } from './classroom.service';

@Module({
    imports: [TypeOrmModule.forFeature([ClassroomRepository])],
    controllers: [ClassroomController, ClassroomController],
    exports: [ClassroomService],
    providers: [ClassroomService, ClassroomService],
})
export class ClassroomModule {}
