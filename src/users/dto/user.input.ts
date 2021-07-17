import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(3)
  @Field()
  firstname: string;

  @MinLength(1)
  @Field()
  lastname: string;

  @IsNotEmpty()
  @Field()
  specialization: string;

  @IsDateString()
  @Field()
  createdAt: string;
}
