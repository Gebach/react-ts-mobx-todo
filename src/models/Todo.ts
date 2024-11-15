export interface TodoProps {
  readonly id: number
  todo: string
  completed: boolean
}

export class Todo implements TodoProps {
  id
  todo
  completed

  constructor(id: number, todo: string, completed: boolean) {
    this.id = id
    this.todo = todo
    this.completed = completed
  }

  getTodoId() {
    return this.id
  }

  getTodoContent() {
    return this.todo
  }

  setTodo(todo: string) {
    this.todo = todo
  }

  isCompleted() {
    return this.completed
  }

  toggleIsCompleted() {
    this.completed = !this.isCompleted()
  }
}
