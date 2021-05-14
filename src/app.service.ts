import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRespository: Repository<User>,
    ){}

  getAll(): Promise<User[]>{
    return this.usersRespository.find();
  }  

  async getOneById(id: number): Promise<User>{
    try{

      const user = await this.usersRespository.findOneOrFail(id);
      return user;
    }catch(err){
      throw err;
    }
    
  }
  createUser(model: string,): Promise<User>{
    const newModel = this.usersRespository.create({model});
    return this.usersRespository.save(newModel);
  }

  async updateUser(id: number, model: string): Promise<User>{
      const user = await this.getOneById(id);
      user.model = model;
      return this.usersRespository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);
    return this.usersRespository.remove(user);

  }

  getHello(): string {
    return 'Hello World!';
  }
}
