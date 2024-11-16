import { makeAutoObservable } from 'mobx'
import { Todo } from '../models/Todo'

class TodosStore {
  storeTodos: Todo[] = []
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  getTodos = (): Todo[] => {
    const todosString = localStorage.getItem('todos')

    if (todosString) {
      let parsedTodos: Todo[] = JSON.parse(todosString)
      parsedTodos = parsedTodos.map(todo => new Todo(todo.id, todo.todoContent, todo.completed))
      this.storeTodos.push(...parsedTodos)
      return parsedTodos
    }

    return []
  }

  addNewTodo = (todo: Todo) => {
    this.storeTodos.unshift(todo)
    localStorage.setItem('todos', JSON.stringify(this.storeTodos))
  }

  sortTodos = () => {
    return this.storeTodos.sort((a, b) => {
      if (!a.completed && b.completed) return -1
      if (a.completed && !b.completed) return 1
      return 0
    })
  }

  deleteTodo = (todo: Todo) => {
    this.storeTodos = this.storeTodos.filter(t => t !== todo)
    localStorage.setItem('todos', JSON.stringify(this.storeTodos))
  }

  clearTodos = () => {
    this.storeTodos = []
    localStorage.clear()
  }

  updateTodo = (id: string, updatedFields: Partial<Todo>) => {
    const todoToUpdate = this.storeTodos.find(todo => todo.getTodoId() === id)
    if (todoToUpdate) {
      Object.assign(todoToUpdate, updatedFields)
      localStorage.setItem('todos', JSON.stringify(this.storeTodos))
    }
  }
}

export default new TodosStore()
