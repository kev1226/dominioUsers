import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: {
            name: string;
            email: string;
        };
    }>;
}
