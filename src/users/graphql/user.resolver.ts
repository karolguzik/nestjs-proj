import { CreateUserInput } from '../dto/user.input';
import { UsersService } from './../users.service';
import { Specialization } from '../enum/user-specialization.enum';
import { UserType } from './user.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => UserType)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [UserType])
  users() {
    return this.usersService.getUsers();
  }

  @Query((returns) => UserType)
  user(@Args('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Mutation((returns) => UserType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }
}
