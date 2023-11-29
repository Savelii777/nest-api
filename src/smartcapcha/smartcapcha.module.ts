import { Module } from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';
import { SmartcapchaController } from './smartcapcha.controller';
import {HttpModule} from "@nestjs/axios";
import { ConfigModule } from '@nestjs/config';
import {PhoneModule} from "../phone/phone.module";
import {PhoneService} from "../phone/phone.service";

@Module({
  imports: [HttpModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
  }), PhoneModule],
  providers: [SmartcapchaService, PhoneService], // Explicitly provide PhoneService
  controllers: [SmartcapchaController, ],
})
export class SmartcapchaModule {}
