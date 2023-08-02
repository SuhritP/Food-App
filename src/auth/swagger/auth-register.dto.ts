import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";

export class AuthRegisterDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    other_role: string;

}

export class UpdateAuthRegisterDto extends PartialType(
    OmitType(AuthRegisterDto, ['password'] as const),
  ) {}

export class AuthRegisterDao {

    @ApiProperty()
    user: UpdateAuthRegisterDto;

    @ApiProperty()
    accessToken: string;

}

