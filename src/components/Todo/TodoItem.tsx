import { Checkbox, CheckboxProps } from 'antd'
import { Todo } from '../../models/Todo'
import CloseButton from '../Button/CloseButton'
import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import todoStore from '../../stores/todo-store'

interface TodoitemProps {
  todo: Todo
  tabKey: string
  onComplete: () => void
}

function TodoItem({ todo, tabKey, onComplete }: TodoitemProps) {
  const { deleteTodo, updateTodo } = todoStore

  const [isChecked, setIsCheckd] = useState<boolean>(todo.isCompleted())
  const [todoValue, setTodoValue] = useState<string>(todo.getTodoContent())

  useEffect(() => {
    onComplete()
    setIsCheckd(todo.isCompleted())
  }, [todo.isCompleted()])

  const onChange: CheckboxProps['onChange'] = () => {
    todo.toggleIsCompleted()
    setIsCheckd(todo.isCompleted())
    updateTodo(todo.getTodoId(), { completed: todo.isCompleted() })
  }

  function onClickHandler() {
    confirm('Вы уверены, что хотите удалить Todo?') && deleteTodo(todo)
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value)
  }

  function onBlurHandler() {
    updateTodo(todo.getTodoId(), { todoContent: todoValue })
  }

  const todoDisplay: string =
    (todo.isCompleted() && tabKey === '2') || (!todo.isCompleted() && tabKey === '1') || tabKey === '0'
      ? 'flex'
      : 'none'

  return (
    <div style={{ display: todoDisplay }} className="mt-2 flex items-end justify-center gap-6">
      <Checkbox style={{ transform: 'scale(1.2)' }} checked={isChecked} onChange={onChange} />
      <input
        style={{ textDecoration: todo.isCompleted() ? 'line-through' : '', color: todo.isCompleted() ? '#aeaeae' : '' }}
        className="text-xl min-w-80"
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={todoValue}
      />
      <CloseButton onClick={onClickHandler} />
    </div>
  )
}

export default observer(TodoItem)
