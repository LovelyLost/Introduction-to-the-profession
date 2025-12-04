import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({ description: 'Уникальный идентификатор задачи', example: 1 })
  id: number;

  @ApiProperty({ description: 'Заголовок задачи', example: 'Изучить NestJS' })
  title: string;

  @ApiProperty({ 
    description: 'Описание задачи', 
    example: 'Изучить основы фреймворка NestJS',
    required: false 
  })
  description: string;

  @ApiProperty({ description: 'Статус выполнения задачи', example: false })
  completed: boolean;

  @ApiProperty({ description: 'Дата создания задачи', example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ description: 'Дата последнего обновления задачи', example: '2024-01-01T00:00:00.000Z' })
  updatedAt: Date;
}