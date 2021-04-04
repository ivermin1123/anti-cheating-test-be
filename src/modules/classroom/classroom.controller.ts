import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('classrooms')
@ApiTags('classrooms')
export class ClassroomController {}
