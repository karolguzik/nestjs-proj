import { IsDateString, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 6)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 6)
  lastname: string;

  @IsString()
  @IsNotEmpty()
  // @IsEnum(Specialization)
  specialization: string;

  @IsDateString()
  createdAt: string;
}
