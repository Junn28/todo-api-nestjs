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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('module')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all data from database.',
  })
  async getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get data based on id.',
  })
  async getTodosById(@Param('id') id: number) {
    return this.todoService.getTodosById(id);
  }

  @Post('todo')
  @ApiOperation({
    summary: 'Create new data todo.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        desciption: {
          type: 'string',
          example: 'membersihkan halaman rumah.',
        },
        due_date: {
          type: 'date',
          example: '2012-04-21T18:25:43-05:00',
        },
      },
    },
  })
  async createTodo(@Body() data: createTodoDto) {
    return this.todoService.createTodo(data);
  }

  @Put('todo/:id')
  @ApiOperation({
    summary: 'Update data todo in database based on id.',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'enter todo id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        desciption: {
          type: 'string',
          example: 'membersihkan halaman sekolah.',
        },
        due_date: {
          type: 'date',
          example: '2012-05-21T18:25:43-05:00',
        },
      },
    },
  })
  async updateTodo(@Param('id') id: number, @Body() data: updateTodoDto) {
    return this.todoService.updateTodo(id, data);
  }

  @Patch('todo/:id')
  @ApiOperation({
    summary: 'Update data todo complete.',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'enter todo id',
    required: true,
  })
  @ApiBody({
    schema: {
      properties: {
        completed: {
          type: 'boolean',
          example: true,
        },
      },
    },
  })
  async updateTodoCompleted(
    @Param('id') id: number,
    @Body() data: updateCompletedDto,
  ) {
    return this.todoService.updateTodoCompleted(id, data);
  }

  @Delete('todo/:id')
  @ApiOperation({
    summary: 'Delete data todo from database.',
  })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'enter todo id',
    required: true,
  })
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
