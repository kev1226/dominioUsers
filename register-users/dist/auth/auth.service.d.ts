import { OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService implements OnModuleInit {
    private client;
    onModuleInit(): Promise<void>;
    register({ name, email, password }: RegisterDto): Promise<{
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
