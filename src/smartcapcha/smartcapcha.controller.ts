import { Controller, Post, Body} from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';
import {PhoneService} from "../phone/phone.service";

@Controller('smartcapcha')
export class SmartcapchaController {
  constructor(private readonly smartcapchaService: SmartcapchaService, private readonly phoneService: PhoneService) {}

  @Post('check')
  async checkCapcha(@Body('token') token: string, @Body('phone') phone: string) {
    if (await this.smartcapchaService.checkCaptcha(token)){
      return await this.phoneService.getCode(phone);
    }
    return await this.smartcapchaService.checkCaptcha(token);
  }
  @Post('verify-phone')
  async verifyPhone(@Body('code') code: string): Promise<boolean> {
    const generatedCode = await this.phoneService.getGeneratedCode();
    console.log(`${generatedCode} ${code}`);
    return code === generatedCode;
  }
}


