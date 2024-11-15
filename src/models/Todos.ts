import { Todo } from './Todo'

export class Todos {
  todos: Todo[]

  constructor(todos: Todo[]) {
    this.todos = todos
  }

  getTodos() {
    return this.todos
  }
}
