import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ 
    description: 'Заголовок задачи',
    example: 'Изучить NestJS',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @ApiProperty({ 
    description: 'Описание задачи',
    example: 'Изучить основы фреймворка NestJS',
    required: false,
    maxLength: 500
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;
}