import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('exams')
@ApiTags('exams')
export class ExamController {}
