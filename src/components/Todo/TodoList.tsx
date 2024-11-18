import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import TodoItem from './TodoItem'
import todosStore from '../../stores/todo-store'
import TabsComponent from '../tabs/TabsComponent'
import { Todo } from '../../models/Todo'

interface TodoListProps {
  todosArr?: Todo[]
}

export const TodoList = observer(({ todosArr }: TodoListProps) => {
  const { sortTodos } = todosStore
  const [tabKey, setTabKey] = useState<string>('0')
  const [todos, setTodos] = useState<Todo[] | undefined>()

  useEffect(() => {
    setTodos(todosArr)
  })

  const onChange = (key: string) => {
    setTabKey(key)
  }

  function onCompleteHandler() {
    setTodos(sortTodos())
  }

  if (todos?.length === 0) return <p className="empty-todo-list text-center text-2xl mt-2">Список пуст :((</p>

  return (
    <>
      <TabsComponent onChange={onChange} tabsAmount={3} tabsLabels={['Все', 'Невыполненные', 'Выполненные']} />
      <div className="todo-list flex flex-col items-center justify-center">
        {todos?.map(t => (
          <TodoItem onComplete={onCompleteHandler} tabKey={tabKey} key={t.getTodoId()} todo={t} />
        ))}
      </div>
    </>
  )
})
