import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap(configService: ConfigService) {
  const port = configService.get('PORT');
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

// Bootstrap the application
bootstrap(new ConfigService());