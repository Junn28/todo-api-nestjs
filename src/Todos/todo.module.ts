import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './repository/todo.repository';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, TodoRepository, PrismaService],
  exports: [TodoService],
})
export class TodoModule {}
