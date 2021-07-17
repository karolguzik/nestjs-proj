import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUser(id: string): Promise<User> {
    return this.usersRepository.findOne({ id });
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create({ id: uuid(), ...user });
    return this.usersRepository.save(newUser);
  }
}
