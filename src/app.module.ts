import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartcapchaModule } from './smartcapcha/smartcapcha.module';
import { PhoneModule } from './phone/phone.module';
import { AnketaModule } from './anketa/anketa.module';

@Module({
  imports: [SmartcapchaModule, PhoneModule, AnketaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
