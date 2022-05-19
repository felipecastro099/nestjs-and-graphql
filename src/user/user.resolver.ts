import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Query(() => User)
  async findUserById(@Args('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    return this.userService.createUser(data);
  }
}
