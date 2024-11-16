import { observer } from 'mobx-react-lite'
import CheckButton from '../Button/CheckButton'
import Input from '../Input/Input'
import todoStore from '../../stores/todo-store'
import { FormEvent, useState } from 'react'
import { Todo } from '../../models/Todo'
import { nanoid } from 'nanoid'

export const TodoAddTodo = observer(() => {
  const [todoValue, setTodoValue] = useState<string>('')
  const { addNewTodo } = todoStore

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value)
  }

  function sumbitHandler(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault()
    if (todoValue) addNewTodo(new Todo(nanoid(), todoValue.trim(), false))
    else alert('Todo не должно быть пустым!')
    setTodoValue('')
  }

  return (
    <form onSubmit={sumbitHandler} className="flex items-center justify-center gap-2">
      <Input value={todoValue} onChange={onChangeHandler} />
      <CheckButton
        onClick={() => {
          sumbitHandler()
        }}
      />
    </form>
  )
})
