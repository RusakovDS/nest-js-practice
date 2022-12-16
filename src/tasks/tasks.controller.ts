import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createNewTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): ITask {
    return this.tasksService.createTask(title, description);
  }
}
