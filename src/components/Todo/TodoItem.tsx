import { Checkbox, CheckboxProps } from 'antd'
import { Todo } from '../../models/Todo'
import styled from 'styled-components'
import CloseButton from '../Button/CloseButton'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import todoStore from '../../stores/todo-store'

interface TodoitemProps {
  todo: Todo
  tabKey: string
  onComplete: () => void
}

function TodoItem({ todo, tabKey, onComplete }: TodoitemProps) {
  const { deleteTodo } = todoStore

  const [isChecked, setIsCheckd] = useState(false)

  useEffect(() => {
    onComplete()
  }, [isChecked])

  const onChange: CheckboxProps['onChange'] = () => {
    todo.toggleIsCompleted()
    setIsCheckd(prev => !prev)
  }

  function onClickHandler() {
    confirm('Вы уверены, что хотите удалить Todo?') && deleteTodo(todo)
  }

  function onChangeHandler() {}

  const Input = styled.input`
    text-decoration: ${todo.isCompleted() && 'line-through'};
    color: ${todo.isCompleted() && '#aeaeae'};
  `

  const todoDisplay: string =
    (todo.isCompleted() && tabKey === '2') || (!todo.isCompleted() && tabKey === '1') || tabKey === '0'
      ? 'flex'
      : 'none'

  return (
    <div style={{ display: todoDisplay }} className="mt-2 flex items-end justify-center gap-6">
      <Checkbox style={{ transform: 'scale(1.2)' }} checked={isChecked} onChange={onChange} />
      <Input disabled={true} className="text-xl min-w-80" onChange={onChangeHandler} value={todo.getTodoContent()} />
      <CloseButton onClick={onClickHandler} />
    </div>
  )
}

export default observer(TodoItem)
