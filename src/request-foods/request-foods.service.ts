import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestFood, RequestFoodDocument } from './request_food.schema';

@Injectable()
export class RequestFoodsService {

  constructor(@InjectModel(RequestFood.name) private requestFoodModel: Model<RequestFoodDocument>) { }

  async findAll(conditions: any, sort: any, pageOptions: { page: number, limit: number }): Promise<any> {
    return await this.requestFoodModel.find(conditions)
      .sort(sort)
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .lean().exec();
  }

  async findOne(id: string): Promise<any> {
    return await this.requestFoodModel.findOne({ _id: id });
  }

  async create(createRequestFoodDto: any): Promise<any> {
    return await this.requestFoodModel.create(createRequestFoodDto);
  }

  async update(id: string, createRequestFoodDto: any): Promise<any> {
    return await this.requestFoodModel.findByIdAndUpdate(id, createRequestFoodDto, { new: true });
  }

  /* async upload(id: string, image_path: string): Promise<any> {
    return await this.requestFoodModel.findByIdAndUpdate(id, {food_image: image_path}, {new: true});
  } */


  async acceptFood(id: string, createRequestFoodDto: any): Promise<any> {
    return await this.requestFoodModel.findByIdAndUpdate(id, createRequestFoodDto, { new: true });
  }

  async rejectFood(id: string, createRequestFoodDto: any): Promise<any> {

    let data = await this.findOne(id);

    console.log(createRequestFoodDto);


    let { rejectedIds } = data;

    var arraycontainsturtles = (rejectedIds.indexOf(createRequestFoodDto.rejectId) > -1);

    if (arraycontainsturtles) {
      return {
        "message": "User already rejected",
        status: 400,
        data: null
      }
    }


    rejectedIds.push(createRequestFoodDto.rejectId);

    let finalData = {
      rejectedIds
    }
    return await this.requestFoodModel.findByIdAndUpdate(id, finalData, { new: true });

  }

}
