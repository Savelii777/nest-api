import { Controller, Post, Body} from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';
import {PhoneService} from "../phone/phone.service";

@Controller('smartcapcha')
export class SmartcapchaController {
  constructor(private readonly smartcapchaService: SmartcapchaService, private readonly phoneService: PhoneService) {}

  @Post('check')
  async checkCapcha(@Body('token') token: string, @Body('phone') phone: string) {
    if (await this.smartcapchaService.checkCaptcha(token)){
    // await this.smartcapchaService.checkCaptcha(token)
      return await this.phoneService.getCode(phone);
    }
    return await this.smartcapchaService.checkCaptcha(token);
  }
  @Post('verify-phone')
  async verifyPhone(@Body('code') code: string, @Body('phone') phone: string): Promise<boolean> {
    const data = await this.phoneService.getGeneratedCode();
    console.log(`${data[0]} ${code}`);
    console.log(`${data[1]} ${phone}`);
    if(data[1]===phone){
      return data[0].includes(code);
    }else return false;
  }
}


