import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(createUserDto: any): Promise<User> {
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser ? createdUser['_doc'] : null;
    }

    async findAll(filter: Partial<User>): Promise<User[] | undefined> {
      const result = await this.userModel.find(filter).lean().exec();
      console.log('result: ', JSON.stringify(result, null, 4));
      return result;
    }

    async findOne(id: string): Promise<User | undefined> {
      return await this.userModel.findById(id).exec();
    }

    /* async login(user: any) {
      const payload = { email: user.email, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } */

    /* async findAll(): Promise<User[]> {
        return this.UserModel.find().exec();
    } */

    /* async register() {
        return {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1amlAbWFpbC5jb20iLCJpYXQiOjE2Mjk1NDYwNzAsImV4cCI6MTYyOTU0OTY3MCwic3ViIjoiOSJ9.2ByG7Pc64t9RQuajYbEXBLHsrdR5Xp5VzoPn-1WksZQ',
          user: {
            email: 'suji@mail.com',
            name: 'Sulthan M',
            id: 9,
          },
        };
      } */
    
      /* async login() {
        return {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtcmVlbkBtYWlsLmNvbSIsImlhdCI6MTYyOTU0NjEzNSwiZXhwIjoxNjI5NTQ5NzM1LCJzdWIiOiI4In0.CoZTSWyvsEXrFM9YckIbHPl_9na9rr8SokwTPcU5z94',
          user: {
            email: 'amreen@mail.com',
            name: 'amreen',
            phone: '1',
            role: 'NGO',
            id: 8,
          },
        };
      }
 */
}
