import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('majors')
@ApiTags('majors')
export class MajorController {}
