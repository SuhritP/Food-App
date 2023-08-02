import { Body, Controller, Get, Param, Patch, Post, Put, Query, Req, UploadedFile, UseInterceptors, Version } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Request } from 'express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { RequestFoodsService } from './request-foods.service';
import { RequestFoodsCreateDao, RequestFoodsCreateDto } from './swagger/request-foods-create.dto';
import { RequestFoodsFindAllDao } from './swagger/request-foods-find-all.dto';
import { RequestFoodsFindOneDao } from './swagger/request-foods-find-one.dto';
import { Public } from 'src/public.decorator';

@ApiBearerAuth()
@Controller('requestFoods')
export class RequestFoodsController {

  constructor(private readonly requestFoodsService: RequestFoodsService) {}

  @Version('1')
  @Get()
  @ApiResponse({type: [RequestFoodsFindAllDao]})
  async findAllV1(@Query() query: any): Promise<RequestFoodsFindAllDao[]> {
    return await this.requestFoodsService.findAll(query['filters'], query['sort'], query['pageOptions']);
  }

  @Version('1')
  @Get(':id')
  @ApiResponse({type: RequestFoodsFindOneDao})
  async findOneV1(@Param('id') id: string): Promise<RequestFoodsFindOneDao | any> {
    return await this.requestFoodsService.findOne(id);
  }

  @Version('1')
  @Post()
  @ApiResponse({type: RequestFoodsCreateDao})
  async createV1(@Body() createRequestFoodDto: RequestFoodsCreateDto): Promise<RequestFoodsCreateDao | any> {
      console.log(createRequestFoodDto);
      
    return await this.requestFoodsService.create(createRequestFoodDto);
  }

  @Version('1')
  @Put('/accept/:id')
  @ApiResponse({type: RequestFoodsFindOneDao})
  async acceptRequestFood(@Param('id') id: string, @Body() updateRequestFoodDto: RequestFoodsCreateDao): Promise<RequestFoodsCreateDao | any> {
    return await this.requestFoodsService.acceptFood(id,updateRequestFoodDto);
  }

  @Version('1')
  @Put('/reject/:id')
  @ApiResponse({type: RequestFoodsCreateDao})
  async rejectRequestFood(@Param('id') id: string, @Body() updateRequestFoodDto: RequestFoodsCreateDao): Promise<RequestFoodsCreateDao | any> {
    return await this.requestFoodsService.rejectFood(id,updateRequestFoodDto)
  }

  // @Version('1')
  // @Patch(':id')
  // @ApiResponse({type: RequestFoodsCreateDao})
  // async updateV1(@Param('id') id: string, @Body() updateRequestFoodDto: RequestFoodsCreateDao): Promise<RequestFoodsCreateDao | any> {
  //   return await this.requestFoodsService.update(id, updateRequestFoodDto);
  // }

  @Version('1')
  @Post('/upload')
  @Public()
  @ApiConsumes('application/octet-stream')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadV1(@UploadedFile() file: Express.Multer.File, @Param('id') id: string, @Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host');
    console.log(file);
    
    // return await this.requestFoodsService.upload(id, baseUrl + '/upload/' + file.filename);
    return await this.requestFoodsService.update(id, {food_image: baseUrl + '/upload/' + file.filename});
  }

  
}
