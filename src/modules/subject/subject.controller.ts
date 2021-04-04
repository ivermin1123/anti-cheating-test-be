import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('subjects')
@ApiTags('subjects')
export class SubjectController {}
