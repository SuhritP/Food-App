import { AuthRegisterDto } from "./auth-register.dto";
export declare class AuthLoginDto {
    email: string;
    password: string;
    role: string;
}
declare const UpdateAuthRegisterDto_base: import("@nestjs/common").Type<Partial<Omit<AuthRegisterDto, "password">>>;
export declare class UpdateAuthRegisterDto extends UpdateAuthRegisterDto_base {
}
export declare class AuthLoginDao {
    user: UpdateAuthRegisterDto;
    accessToken: string;
}
export {};
