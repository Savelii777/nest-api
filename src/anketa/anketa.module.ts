import { Module } from '@nestjs/common';
import { AnketaService } from './anketa.service';
import { AnketaController } from './anketa.controller';
import {PhoneService} from "../phone/phone.service";
import {HttpModule} from "@nestjs/axios";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
  })],
  controllers: [AnketaController],
  providers: [AnketaService, PhoneService],
})
export class AnketaModule {}
