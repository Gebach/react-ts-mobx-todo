import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import TodoComponent from '../../components/Todo/TodoComponent'

describe('TodoAddTodo component', () => {
  it('should add Todo to list after submit', async () => {
    render(<TodoComponent />)
    const submitBtn = screen.getByRole('submit-btn')
    const user = userEvent.setup()
    const addTodoInput = screen.getByRole('add-todo-input')
    await user.clear(addTodoInput)
    await user.type(addTodoInput, 'Make coffee and rest')
    user.click(submitBtn)

    expect(screen.getByDisplayValue('Make coffee and rest')).toBeInTheDocument()
  })
})
