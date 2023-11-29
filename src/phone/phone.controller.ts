import { Body, Controller, Post } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post('getcode')
  async getCode(@Body('phone') phone: string): Promise<void> {
    const context = { phone: phone };
    // this.phoneService.setContext(context);
    // console.log(this.phoneService.getContext());
    await this.phoneService.getCode(context.phone);
  }

  @Post('check')
  async check(@Body('code') code: string): Promise<boolean> {
    const generatedCode = await this.phoneService.getGeneratedCode();
    console.log(`${generatedCode} ${code}`);

    return code === generatedCode;
  }
}