import {Body, Controller, Post} from '@nestjs/common';
import { AnketaService } from './anketa.service';

@Controller('anketa')
export class AnketaController {
  constructor(private readonly anketaService: AnketaService) {}


}
