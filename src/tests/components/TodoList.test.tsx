import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it, vi } from 'vitest'
import { TodoList } from '../../components/Todo/TodoList'
import todosStore from '../../stores/__test__/todo-store'
import userEvent from '@testing-library/user-event'

describe('TodoList', () => {
  it('should render no Todos when the todos array are empty', () => {
    render(<TodoList todosArr={[]} />)
    expect(screen.getByText(/Список пуст :\(\(/i)).toBeInTheDocument()
  })

  it('should render a list of Todos', () => {
    const { storeTodos } = todosStore
    render(<TodoList todosArr={storeTodos} />)

    storeTodos.map(t => {
      const item = screen.getByDisplayValue(t.getTodoContent())
      expect(item).toBeInTheDocument()
    })
  })

  it('should clear Todos list', async () => {
    vi.spyOn(window, 'confirm').mockReturnValueOnce(true)

    const user = userEvent.setup()
    const clearButton = screen.getByRole('clear-todos')
    await user.click(clearButton)

    expect(screen.getByText(/Список пуст :\(\(/i)).toBeInTheDocument()
  })
})
