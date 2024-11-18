import '@testing-library/jest-dom/vitest'
import { it, expect, describe, vi, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import TodoItem from '../../components/Todo/TodoItem'
import { userEvent } from '@testing-library/user-event'
import { Todo } from '../../models/Todo'
import todosStore from '../../stores/__test__/todo-store'

describe('TodoItem', () => {
  it('should throw an error if there is no todo', () => {
    const newTodo = new Todo('', '', false)

    expect(() => render(<TodoItem todo={newTodo} onComplete={() => {}} tabKey="0" />)).toThrowError('Unexpected error')
  })

  let todo1: Todo

  beforeEach(() => {
    todo1 = new Todo('1', 'Make coffee', false)
    // vi.spyOn(todosStore, 'getTodos').mockReturnValueOnce([todo1])
  })

  it('should render Todo item', () => {
    render(<TodoItem todo={todo1} onComplete={() => {}} tabKey="0" />)
    expect(screen.getByDisplayValue(todo1.getTodoContent())).toBeInTheDocument()
  })

  it('should delete todo when delete button is clicked', async () => {
    vi.spyOn(window, 'confirm').mockReturnValueOnce(true)

    const { getTodos, deleteTodo } = todosStore
    const deleteButton = screen.getByRole('delete-button')
    const user = userEvent.setup()
    await user.click(deleteButton)
    deleteTodo(todo1)

    expect(getTodos()).toEqual([])
  })

  it('should rename a Todo when input is changed', async () => {
    const { updateTodo, getTodos, storeTodos } = todosStore
    storeTodos.push(new Todo('1', 'Make coffee', false))
    const todoInput = screen.getByDisplayValue<HTMLInputElement>(todo1.getTodoContent())
    const user = userEvent.setup()
    await user.clear(todoInput)
    await user.type(todoInput, 'Make coffee and rest')
    updateTodo(todo1.getTodoId(), { todoContent: todoInput.value })

    expect(todoInput).toHaveValue('Make coffee and rest')
    expect(getTodos()).toEqual([new Todo('1', 'Make coffee and rest', false)])
  })
})
