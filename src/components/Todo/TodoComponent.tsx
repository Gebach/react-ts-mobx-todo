import { useEffect } from 'react'
import { TodoAddTodo } from './TodoAddTodo'
import { TodoList } from './TodoList'
import todoStore from '../../stores/todo-store'

function TodoComponent() {
  const { getTodos } = todoStore

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <TodoAddTodo />
      <TodoList />
    </>
  )
}

export default TodoComponent
