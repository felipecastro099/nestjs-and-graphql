import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }

  async findUserById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
