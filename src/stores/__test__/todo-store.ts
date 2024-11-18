import { Todo } from '../../models/Todo'

class TodosStore {
  storeTodos: Todo[] = [new Todo('1', 'Make coffee', false)]
  isLoading: boolean = false

  getLocalTodos = () => {
    const todosString = localStorage.getItem('todos')

    if (todosString) {
      let parsedTodos: Todo[] = JSON.parse(todosString)
      parsedTodos = parsedTodos.map(todo => new Todo(todo.id, todo.todoContent, todo.completed))
      this.storeTodos.push(...parsedTodos)
    }
  }

  getTodos = () => {
    return this.storeTodos
  }

  addNewTodo = (todo: Todo) => {
    this.storeTodos.unshift(todo)
    // localStorage.setItem('todos', JSON.stringify(this.storeTodos))
  }

  sortTodos = () => {
    return this.storeTodos.sort((a, b) => {
      if (!a.completed && b.completed) return -1
      if (a.completed && !b.completed) return 1
      return 0
    })
  }

  deleteTodo = (todo: Todo) => {
    const index = todosStore.storeTodos.findIndex(t => t.getTodoId() === todo.getTodoId())
    if (index > -1) {
      todosStore.storeTodos.splice(index, 1)
    }
    // localStorage.setItem('todos', JSON.stringify(this.storeTodos))
  }

  clearTodos = () => {
    this.storeTodos = []
    // localStorage.clear()
  }

  updateTodo = (id: string, updatedFields: Partial<Todo>) => {
    const todoToUpdate = this.storeTodos.find(todo => todo.getTodoId() === id)
    if (todoToUpdate) {
      Object.assign(todoToUpdate, updatedFields)
      // localStorage.setItem('todos', JSON.stringify(this.storeTodos))
    }
  }
}

const todosStore = new TodosStore()

export default todosStore
