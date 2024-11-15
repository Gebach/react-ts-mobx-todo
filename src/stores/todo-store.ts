import { makeAutoObservable } from 'mobx'
import { Todo } from '../models/Todo'
import { Todos } from '../models/Todos'

class TodosStore {
  storeTodos: Todo[] = []
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  addNewTodo = (todo: Todo) => {
    this.storeTodos.push(todo)
  }

  sortTodos = (todos: Todos) => {
    this.storeTodos = todos
      .getTodos()
      .slice()
      .sort((a, b) => {
        if (!a.completed && b.completed) return -1
        if (a.completed && !b.completed) return 1
        return 0
      })
  }

  deleteTodo = (todo: Todo) => {
    this.storeTodos = this.storeTodos.filter(t => t !== todo)
  }
}

export default new TodosStore()
