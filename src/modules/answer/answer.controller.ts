import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('answers')
@ApiTags('answers')
export class AnswerController {}
