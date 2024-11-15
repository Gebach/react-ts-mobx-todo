interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Введите Todo"
      className="todo-input w-full border-1 border-black border rounded-lg text-center p-1 text-xl
      focus:outline-none focus:border-lime-700 focus:shadow"
      name="todo-input"
      id="todoInput"
      value={value}
      onChange={e => onChange(e)}
    />
  )
}

export default Input
