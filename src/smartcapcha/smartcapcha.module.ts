import { Module } from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';
import { SmartcapchaController } from './smartcapcha.controller';
import {HttpModule} from "@nestjs/axios";
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SmartcapchaController, ],
  imports: [HttpModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
  })],
  providers: [SmartcapchaService],
})
export class SmartcapchaModule {}
