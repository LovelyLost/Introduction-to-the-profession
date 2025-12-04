import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Query, 
  NotFoundException,
  HttpStatus 
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiQuery, 
  ApiBody 
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './create-task.dto';

@ApiTags('tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Получить список задач' })
  @ApiQuery({ 
    name: 'search', 
    required: false, 
    description: 'Поиск по заголовку и описанию' 
  })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Список задач успешно получен',
    type: [Task]
  })
  getTasks(@Query('search') search?: string): Task[] {
    return this.tasksService.findAll(search);
  }

  @Post()
  @ApiOperation({ summary: 'Создать новую задачу' })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Задача успешно создана',
    type: Task
  })
  @ApiResponse({ 
    status: HttpStatus.BAD_REQUEST, 
    description: 'Неверные данные задачи' 
  })
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Post(':id/finish')
  @ApiOperation({ summary: 'Отметить задачу как выполненную' })
  @ApiParam({ name: 'id', description: 'ID задачи' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Задача успешно отмечена как выполненная',
    type: Task
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Задача не найдена' 
  })
  markAsCompleted(@Param('id') id: string): Task {
    const taskId = parseInt(id, 10);
    const task = this.tasksService.markAsCompleted(taskId);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  @Post(':id/todo')
  @ApiOperation({ summary: 'Отметить задачу как невыполненную' })
  @ApiParam({ name: 'id', description: 'ID задачи' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Задача успешно отмечена как невыполненная',
    type: Task
  })
  @ApiResponse({ 
    status: HttpStatus.NOT_FOUND, 
    description: 'Задача не найдена' 
  })
  markAsTodo(@Param('id') id: string): Task {
    const taskId = parseInt(id, 10);
    const task = this.tasksService.markAsTodo(taskId);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }
}