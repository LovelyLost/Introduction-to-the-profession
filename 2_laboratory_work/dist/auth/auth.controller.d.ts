import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): {
        login: string;
        password: string;
    };
    register(dto: any): {
        message: string;
    };
}
