import { Controller, Post, Body} from '@nestjs/common';
import { SmartcapchaService } from './smartcapcha.service';

@Controller('smartcapcha')
export class SmartcapchaController {
  constructor(private readonly smartcapchaService: SmartcapchaService) {}
  // @Get()
  // async myEndpointFunc(@Ip() ip){
  //   return ip;
  // }
  @Post('check')
  async checkCapcha(@Body('token') token: string) {
    return await this.smartcapchaService.checkCaptcha(token);
  }
}


