import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): {
        message: string;
        user: {
            id: number;
            login: string;
            firstName: string;
            lastName: string;
            gender: string;
            age: number;
            createdAt: Date;
        };
    };
    register(dto: RegisterDto): {
        message: string;
        user: {
            id: number;
            login: string;
            firstName: string;
            lastName: string;
            gender: string;
            age: number;
            createdAt: Date;
        };
    };
}
