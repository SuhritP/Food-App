import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Finance, FinanceDocument } from './finance.schema';

@Injectable()
export class FinancesService {

  constructor(@InjectModel(Finance.name) private financeModel: Model<FinanceDocument>) {}

  async create(createFinanceDto: any) {
    const createdUser = new this.financeModel(createFinanceDto);
    return await createdUser.save();
  }

  async findAll(conditions: any, sort: any, pageOptions: {page: number, limit: number}): Promise<any> {
    return await this.financeModel.find(conditions)
    .sort(sort)
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .lean().exec();
  }

  async findOne(id: string) {
    return await this.financeModel.findOne({ _id: id });
  }
  
  /* create(createFinanceDto: any) {
    return 'This action adds a new finance';
  }

  findAll() {
    return `This action returns all finances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finance`;
  }

  update(id: number, updateFinanceDto: any) {
    return `This action updates a #${id} finance`;
  }

  remove(id: number) {
    return `This action removes a #${id} finance`;
  } */
}
