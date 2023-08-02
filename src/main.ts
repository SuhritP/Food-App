import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerDefintion } from './swagger';
import * as bodyParser from 'body-parser';

import * as mongoose from 'mongoose';
import { VersioningType } from '@nestjs/common';
mongoose.set('debug', true);

mongoose.set('useFindAndModify', false);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  swaggerDefintion(app);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
