import { UsersService } from './users.service';
export declare class UsersEventsController {
    private readonly usersService;
    constructor(usersService: UsersService);
    handleGetUserByEmail(email: string): Promise<{
        exists: boolean;
    }>;
    handleUserCreated(data: any): Promise<string>;
}
