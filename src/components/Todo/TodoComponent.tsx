import { useEffect, useState } from 'react'
import { TodoAddTodo } from './TodoAddTodo'
import { TodoList } from './TodoList'
import todosStore from '../../stores/todo-store'
import { Todo } from '../../models/Todo'

function TodoComponent() {
  const { getTodos, getLocalTodos } = todosStore
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getLocalTodos()
    setTodos(getTodos())
  }, [])

  return (
    <>
      <TodoAddTodo />
      <TodoList todosArr={todos} />
    </>
  )
}

export default TodoComponent
