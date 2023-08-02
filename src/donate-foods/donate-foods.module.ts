import { Module } from '@nestjs/common';
import { DonateFoodsService } from './donate-foods.service';
import { DonateFoodsController } from './donate-foods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DonateFood, DonateFoodSchema } from './donate_food.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DonateFood.name, schema: DonateFoodSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './public/upload',
        filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
      }),
      // dest: './upload',
    })
  ],
  controllers: [DonateFoodsController],
  providers: [DonateFoodsService]
})
export class DonateFoodsModule {}
