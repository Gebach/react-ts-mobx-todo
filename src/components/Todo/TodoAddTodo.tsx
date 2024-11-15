import { observer } from 'mobx-react-lite'
import CheckButton from '../Button/CheckButton'
import Input from '../Input/Input'
import todoStore from '../../stores/todo-store'
import { FormEvent, useRef, useState } from 'react'
import { Todo } from '../../models/Todo'

export const TodoAddTodo = observer(() => {
  const [todoValue, setTodoValue] = useState<string>('')
  const formRef = useRef<HTMLFormElement | null>(null)
  const { addNewTodo } = todoStore

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value)
  }

  function sumbitHandler(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault()
    // formRef.current?.reset()
    // setTodoValue('')
    addNewTodo(new Todo(Date.now(), todoValue.trim(), false))
  }

  return (
    <form ref={formRef} onSubmit={sumbitHandler} className="flex items-center justify-center gap-2">
      <Input value={todoValue} onChange={onChangeHandler} />
      <CheckButton onClick={sumbitHandler} />
    </form>
  )
})
