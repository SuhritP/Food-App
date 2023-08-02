import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import { createHmac } from 'crypto';
import { AuthRegisterDao, AuthRegisterDto } from './swagger/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(user: AuthRegisterDto): Promise<AuthRegisterDao | any> {
    /* Check if user exist or not */
    const userExist = await this.usersService.findAll({email: user.email});
    if (userExist.length) {
      throw new BadRequestException('Email already exist');
    }
    user.password = this.generateHash(user.password);
    const registeredUser = await this.usersService.create(user);
    const { password, ...result } = registeredUser;
    const payload = { email: user.email, sub: registeredUser['_id'] };
    return {
      user: result,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async login(user: any) {
    const hash = this.generateHash(user.password);
    const userExist = await this.usersService.findAll({email: user.email});
    if (userExist.length && userExist[0].password === hash && (userExist[0].role == user.role || userExist[0].other_role == user.role)) {
      const { password, ...result } = userExist[0];
      const payload = { email: user.email, sub: userExist[0]['_id'] };
      return {
        user: result,
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new BadRequestException('Email / Password / UserType is Incorrect');
    }
  }

  generateHash(text: string) {
    return createHmac('sha256', 'secret').update(text).digest('hex');
  }
}
