import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  //main module of the app
  const app = await NestFactory.create(AppModule);

  //Making validation global in the entire app
  app.useGlobalPipes(new ValidationPipe());
  
  //using port 3000 to listen
  await app.listen(3000);
}
bootstrap();
