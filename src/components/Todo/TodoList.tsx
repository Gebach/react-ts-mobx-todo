import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import TodoItem from './TodoItem'
import todoStore from '../../stores/todo-store'
import TabsComponent from '../tabs/TabsComponent'
import { Todo } from '../../models/Todo'

export const TodoList = observer(() => {
  const { storeTodos, sortTodos } = todoStore
  const [tabKey, setTabKey] = useState<string>('0')
  const [todos, setTodos] = useState<Todo[] | undefined>(storeTodos)

  useEffect(() => {
    setTodos(storeTodos)
  }, [storeTodos])

  const onChange = (key: string) => {
    switch (key) {
      case '1':
        setTabKey('1')
        break
      case '2':
        setTabKey('2')
        break
      default:
        setTabKey('0')
    }
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
