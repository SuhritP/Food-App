import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterDao, AuthRegisterDto } from './swagger/auth-register.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    register(user: AuthRegisterDto): Promise<AuthRegisterDao | any>;
    login(user: any): Promise<{
        user: {
            name: string;
            phone: string;
            email: string;
            profile_image: string;
            role: string;
            other_role: string;
        };
        accessToken: string;
    }>;
    generateHash(text: string): string;
}
