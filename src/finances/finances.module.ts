import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance, FinanceSchema } from './finance.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Finance.name, schema: FinanceSchema }])],
  controllers: [FinancesController],
  providers: [FinancesService]
})
export class FinancesModule {}
