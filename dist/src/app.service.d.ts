import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AppService {
    private usersRespository;
    constructor(usersRespository: Repository<User>);
    getAll(): Promise<User[]>;
    getOneById(id: number): Promise<User>;
    createUser(model: string): Promise<User>;
    updateUser(id: number, model: string): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getHello(): string;
}
