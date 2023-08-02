import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { FinancesService } from './finances.service';
import { FinancesCreateDao, FinancesCreateDto } from './swagger/finances-create.dto';
import { FinancesFindAllDao } from './swagger/finances-find-all.dto';

@ApiBearerAuth()
@Controller('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Version('1')
  @Get()
  @ApiResponse({type: [FinancesFindAllDao]})
  async findAllV1(@Query() query: any): Promise<FinancesFindAllDao> {
    return await this.financesService.findAll(query['filters'], query['sort'], query['pageOptions']);
  }

  @Version('1')
  @Get(':id')
  @ApiResponse({type: FinancesFindAllDao})
  async findOneV1(@Param('id') id: string): Promise<FinancesFindAllDao | any> {
    return await this.financesService.findOne(id);
  }

  @Version('1')
  @Post()
  @ApiResponse({type: FinancesCreateDao})
  async createV1(@Body() createFinanceDto: FinancesCreateDto): Promise<FinancesCreateDao | any> {
    return await this.financesService.create(createFinanceDto);
  }

  /* @Post()
  create(@Body() createFinanceDto: any) {
    return this.financesService.create(createFinanceDto);
  }

  @Get()
  findAll() {
    return this.financesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinanceDto: any) {
    return this.financesService.update(+id, updateFinanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financesService.remove(+id);
  } */
}
