import { Controller } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  /*
  @Post('register')
  async register(@Body() user: any): Promise<any> {
    return await this.usersService.create(user);
  } */

  /* @Post('login')
  async login(@Body() user: any): Promise<any> {
    return await this.usersService.login(user);
  } */

}
