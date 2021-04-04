import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MajorController } from './major.controller';
import { MajorRepository } from './major.repository';
import { MajorService } from './major.service';

@Module({
    imports: [TypeOrmModule.forFeature([MajorRepository])],
    controllers: [MajorController, MajorController],
    exports: [MajorService],
    providers: [MajorService, MajorService],
})
export class MajorModule {}
