import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
// import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): ITask {
    const { title, description } = createTaskDto;

    const task: ITask = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find((item) => item.id === id);
  }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): ITask[] {
  //   const { status, search } = filterDto;

  //   //make logic after database implementation
  // }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): ITask {
    this.tasks.forEach((item) => {
      if (item.id === id) {
        item.status = status;
      }
    });

    return this.getTaskById(id);
  }
}
