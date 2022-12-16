import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.createTask(createTaskDto);
  }
}
