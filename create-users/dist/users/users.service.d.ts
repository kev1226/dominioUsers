import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create({ name, email, password }: CreateUserDto): Promise<{
        name: string | undefined;
        email: string;
    }>;
    findOneByEmail(email: string): Promise<User | null>;
}
