import { Module } from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';
import { SmartcapchaController } from './smartcapcha.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  controllers: [SmartcapchaController],
  imports: [HttpModule],
  providers: [SmartcapchaService],
})
export class SmartcapchaModule {}
