import { Module } from '@nestjs/common';
import { RequestFoodsService } from './request-foods.service';
import { RequestFoodsController } from './request-foods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestFood, RequestFoodSchema } from './request_food.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RequestFood.name, schema: RequestFoodSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './public/upload',
        filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
      }),
    })
  ],
  controllers: [RequestFoodsController],
  providers: [RequestFoodsService]
})
export class RequestFoodsModule {}
