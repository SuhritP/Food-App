import { Body, Controller, Get, Param, Patch, Post, Query, Req, Res, UploadedFile, UseInterceptors, Version } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { Express, Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

import { FileExtender } from '../file.interceptor';
import { DonateFoodsService } from './donate-foods.service';
import { DonateFoodsCreateDao, DonateFoodsCreateDto } from './swagger/donate-foods-create.dto';
import { DonateFoodsFindAllDao } from './swagger/donate-foods-find-all.dto';
import { DonateFoodsFindOneDao } from './swagger/donate-foods-find-one.dto';

@ApiBearerAuth()
@Controller('donateFoods')
export class DonateFoodsController {

  constructor(private readonly donateFoodsService: DonateFoodsService) {}

  @Version('1')
  @Get()
  @ApiResponse({type: [DonateFoodsFindAllDao]})
  async findAllV1(@Query() query: any): Promise<DonateFoodsFindAllDao> {
    return await this.donateFoodsService.findAll(query['filters'], query['sort']);
  }

  @Version('1')
  @Get(':id')
  @ApiResponse({type: DonateFoodsFindOneDao})
  async findOneV1(@Param('id') id: string): Promise<DonateFoodsFindOneDao | any> {
    return await this.donateFoodsService.findOne(id);
  }

  @Version('1')
  @Post()
  @ApiResponse({type: DonateFoodsCreateDao})
  async createV1(@Body() createDonateFoodDto: DonateFoodsCreateDto): Promise<DonateFoodsCreateDao> {
    console.log(createDonateFoodDto);
    
    return await this.donateFoodsService.create(createDonateFoodDto);
  }

  @Version('1')
  @Patch(':id')
  @ApiResponse({type: DonateFoodsCreateDao})
  async updateV1(@Param('id') id: string, @Body() createDonateFoodDto: DonateFoodsCreateDto): Promise<DonateFoodsCreateDao> {
    return await this.donateFoodsService.update(id, createDonateFoodDto);
  }


  @Version('1')
  @Post('/uploads')
  async upload(@Body() createDonateFoodDto: any): Promise<any> {
    // return await this.donateFoodsService.create(createDonateFoodDto);

  

    let base = JSON.parse(createDonateFoodDto.image);

    let {image} = base;
    var outDir = path.join(__dirname, "../../public/upload");

    let imageName = new Date().getTime() + ".png"
    var out = path.join(outDir, imageName);

    fs.writeFileSync(out, image, 'base64');

    
    console.log(createDonateFoodDto);


    return {
      status : 200,
      imagePath:"http://3.109.208.177:3000/upload/"+imageName
    }


  
  }

  

  
}
