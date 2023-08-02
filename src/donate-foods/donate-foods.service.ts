import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DonateFood, DonateFoodDocument } from './donate_food.schema';

@Injectable()
export class DonateFoodsService {
  constructor(
    @InjectModel(DonateFood.name)
    private donateFoodModel: Model<DonateFoodDocument>,
  ) {}

  async findAll(conditions: any, sort: any): Promise<any> {
    return await this.donateFoodModel.find(conditions).sort(sort).lean().exec();
  }

  async findOne(id: string) {
    return await this.donateFoodModel.findOne({ _id: id });
  }

  async create(createDonateFoodDto: any) {
    return await this.donateFoodModel.create(createDonateFoodDto);
  }

  async update(id: string, createDonateFoodDto: any): Promise<any> {
    return await this.donateFoodModel.findByIdAndUpdate(id, createDonateFoodDto, {new: true});
  }

  /* async upload(id: string, image_path: string): Promise<any> {
    return await this.donateFoodModel.findByIdAndUpdate(id, {food_image: image_path}, {new: true});
  } */

}
