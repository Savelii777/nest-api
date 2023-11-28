import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneController } from './phone.controller';
import {HttpModule} from "@nestjs/axios";
import {ConfigModule} from "@nestjs/config";

@Module({
  controllers: [PhoneController],
  imports: [HttpModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
  })],
  providers: [PhoneService],
})
export class PhoneModule {}
