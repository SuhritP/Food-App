import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'users'
})
export class User {

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  profile_image: string;

  @Prop()
  role: string;

  @Prop()
  other_role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);