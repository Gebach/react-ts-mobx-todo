export interface TodoProps {
  readonly id: string
  todoContent: string
  completed: boolean
}

export class Todo implements TodoProps {
  id
  todoContent
  completed

  constructor(id: string, todo: string, completed: boolean) {
    this.id = id
    this.todoContent = todo
    this.completed = completed
  }

  getTodoId() {
    return this.id
  }

  getTodoContent() {
    return this.todoContent
  }

  setTodo(todo: string) {
    this.todoContent = todo
  }

  isCompleted() {
    return this.completed
  }

  toggleIsCompleted() {
    this.completed = !this.isCompleted()
  }
}
