import { Role } from '../../common/enums/rol.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    deleteAd: Date;
}
