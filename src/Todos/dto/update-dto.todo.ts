export class updateTodoDto {
  title: string;
  description: string;
  due_date: Date;
  updatedAt: Date;
}

export class updateCompletedDto {
  completed: boolean;
}
