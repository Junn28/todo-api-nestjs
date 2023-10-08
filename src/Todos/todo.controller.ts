import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { createTodoDto } from './dto/create-dto.todos';
import { updateCompletedDto, updateTodoDto } from './dto/update-dto.todo';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  async getTodosById(@Param('id') id: number) {
    return this.todoService.getTodosById(id);
  }

  @Post('todo')
  async createTodo(@Body() data: createTodoDto) {
    return this.todoService.createTodo(data);
  }

  @Put('todo/:id')
  async updateTodo(@Param('id') id: number, @Body() data: updateTodoDto) {
    return this.todoService.updateTodo(id, data);
  }

  @Patch('todo/:id')
  async updateTodoCompleted(
    @Param('id') id: number,
    @Body() data: updateCompletedDto,
  ) {
    return this.todoService.updateTodoCompleted(id, data);
  }

  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
