import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { AuthRegisterDto } from "./auth-register.dto";

export class AuthLoginDto {

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    role: string;

}

export class UpdateAuthRegisterDto extends PartialType(
    OmitType(AuthRegisterDto, ['password'] as const),
  ) {}

export class AuthLoginDao {

    @ApiProperty()
    user: UpdateAuthRegisterDto;

    @ApiProperty()
    accessToken: string;

}

