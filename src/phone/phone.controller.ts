import { Body, Controller, Post } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('check')
  async check(@Body('phone') phone: string, @Body('code') code: string): Promise<void> {
    await this.phoneService.checkPhone(phone, code);
  }
}