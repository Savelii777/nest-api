import { Module } from '@nestjs/common';
import { AnketaService } from './anketa.service';
import { AnketaController } from './anketa.controller';
import {PhoneService} from "../phone/phone.service";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [AnketaController],
  providers: [AnketaService, PhoneService],
})
export class AnketaModule {}
