import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(search?: string): Task[] {
    if (search) {
      return this.tasks.filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description?.toLowerCase().includes(search.toLowerCase())
      );
    }
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.idCounter++,
      title: createTaskDto.title,
      description: createTaskDto.description || '',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(task);
    return task;
  }

  markAsCompleted(id: number): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    task.completed = true;
    task.updatedAt = new Date();
    return task;
  }

  markAsTodo(id: number): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    task.completed = false;
    task.updatedAt = new Date();
    return task;
  }

  findById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }
}