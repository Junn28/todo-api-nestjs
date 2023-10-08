import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../Todos/repository/todo.repository';
import { createTodoDto } from './dto/create-dto.todos';
import { updateTodoDto } from './dto/update-dto.todo';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getAllTodos() {
    return this.todoRepository.findAll();
  }

  async getTodosById(id: number) {
    return this.todoRepository.findOneById(id);
  }

  async createTodo(data: createTodoDto) {
    return this.todoRepository.create(data);
  }

  async updateTodo(id: number, data: updateTodoDto) {
    return this.todoRepository.update(id, data);
  }

  async updateTodoCompleted(id: number, isComplete: boolean) {
    return this.todoRepository.updateComplete(id, isComplete);
  }

  async deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
