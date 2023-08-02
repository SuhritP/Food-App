export declare class AuthRegisterDto {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    other_role: string;
}
declare const UpdateAuthRegisterDto_base: import("@nestjs/common").Type<Partial<Omit<AuthRegisterDto, "password">>>;
export declare class UpdateAuthRegisterDto extends UpdateAuthRegisterDto_base {
}
export declare class AuthRegisterDao {
    user: UpdateAuthRegisterDto;
    accessToken: string;
}
export {};
