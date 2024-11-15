import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Todos } from '../../models/Todos'
import TodoItem from './TodoItem'
import todoStore from '../../stores/todo-store'
import TabsComponent from '../tabs/TabsComponent'

export const TodoList = observer(() => {
  const { storeTodos, sortTodos } = todoStore
  const [todos, setTodos] = useState<Todos>(new Todos([]))
  const [tabKey, setTabKey] = useState<string>('0')

  useEffect(() => {
    setTodos(new Todos(storeTodos))
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
    sortTodos(todos)
  }

  if (storeTodos.length === 0) return <p className="empty-todo-list text-center text-2xl mt-2">Список пуст :((</p>

  return (
    <>
      <TabsComponent onChange={onChange} tabsAmount={3} tabsLabels={['Все', 'Невыполненные', 'Выполненные']} />
      <div className="todo-list flex flex-col items-center justify-center">
        {storeTodos.map(t => (
          <TodoItem onComplete={onCompleteHandler} tabKey={tabKey} key={t.getTodoId()} todo={t} />
        ))}
      </div>
    </>
  )
})
