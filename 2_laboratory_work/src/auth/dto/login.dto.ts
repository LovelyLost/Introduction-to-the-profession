import { ApiProperty
  
 } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({ description: 'Email пользователя' })
  @IsNotEmpty()
  @IsEmail()
  login: string;

  @ApiProperty({ description: 'Пароль (минимум 8 символов)' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}