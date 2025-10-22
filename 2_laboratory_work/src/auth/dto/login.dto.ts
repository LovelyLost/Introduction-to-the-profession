import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  login: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}