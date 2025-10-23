import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, IsIn, IsNumber, Min, Max } from "class-validator";

export class RegisterDto {
  @ApiProperty({ 
    description: 'Имя пользователя',
    example: 'Иван'
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ 
    description: 'Фамилия пользователя',
    example: 'Иванов'
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ 
    description: 'Email пользователя',
    example: 'ivan@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ 
    description: 'Пароль (минимум 8 символов)',
    example: 'securePassword123',
    minLength: 8
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({ 
    description: 'Пол пользователя', 
    enum: ['male', 'female'],
    example: 'male'
  })
  @IsNotEmpty()
  @IsIn(['male', 'female'])
  gender: string;

  @ApiProperty({ 
    description: 'Возраст пользователя (1-120)',
    example: 25,
    minimum: 1,
    maximum: 120
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(120)
  age: number;
}