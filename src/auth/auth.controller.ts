import { Body, Controller, Post, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Public } from '../public.decorator';
import { AuthService } from './auth.service';
import { AuthLoginDao, AuthLoginDto } from './swagger/auth-login.dto';
import { AuthRegisterDao, AuthRegisterDto } from './swagger/auth-register.dto';

@ApiBearerAuth()
@Controller({
  path: 'auth'/* ,
  version: ['1', '2'] */
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Version('1')
  @Public()
  @Post('register')
  @ApiResponse({type: AuthRegisterDao})
  async registerV1(@Body() user: AuthRegisterDto): Promise<AuthRegisterDao> {
    return await this.authService.register(user);
  }

  @Version('1')
  @Public()
  @Post('login')
  @ApiResponse({type: AuthRegisterDao})
  async loginV1(@Body() user: AuthLoginDto): Promise<AuthLoginDao | any> {
    return await this.authService.login(user);
  }
}
