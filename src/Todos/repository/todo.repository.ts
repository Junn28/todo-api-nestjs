import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { createTodoDto } from '../dto/create-dto.todos';
import { updateCompletedDto, updateTodoDto } from '../dto/update-dto.todo';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.todos.findMany();
  }

  async findOneById(id: number) {
    return this.prisma.todos.findFirst({
      where: {
        id: Number(id),
      },
    });
  }

  async create(data: createTodoDto) {
    return this.prisma.todos.create({
      data,
    });
  }

  async update(id: number, data: updateTodoDto) {
    return this.prisma.todos.update({
      where: {
        id: Number(id),
      },
      data: {
        description: data.description,
        due_date: data.due_date,
        updatedAt: data.updatedAt,
      },
    });
  }

  async updateComplete(id: number, data: updateCompletedDto) {
    return this.prisma.todos.update({
      where: {
        id: Number(id),
      },
      data: {
        completed: data.completed,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.todos.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
