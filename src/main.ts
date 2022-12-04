import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {configService} from "./config/config.service";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
      .setTitle('Bank accounts api. Test task')
      .setDescription('The bank accounts API description')
      .setVersion('1.0')
      .addTag('Bank accounts')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const whiteList = [];
  app.enableCors({
    origin: whiteList,
  });

  await app.listen(configService.getPort());
}
bootstrap();
