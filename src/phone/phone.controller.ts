import { Body, Controller, Post } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('getcode')
    async getCode(@Body('phone') phone: string, @Body('code') code: string): Promise<void> {
    const context = {
      phone: phone,
      code: code
    };
    this.phoneService.setContext(context);
    console.log(this.phoneService.getContext())
    await this.phoneService.getCode(context.phone, context.code);
  }

  @Post('check')
  async check(@Body('code') code: string): Promise<boolean> {
    const generatedCode = await this.phoneService.getGeneratedCode();
    return code === generatedCode;
  }
}