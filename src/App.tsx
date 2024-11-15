import { Typography } from 'antd'
import './App.css'
import Wrapper from './components/wrapper/Wrapper'
import TodoComponent from './components/Todo/TodoComponent'

function App() {
  return (
    <Wrapper>
      <Typography.Title className="text-center">ToDo List</Typography.Title>
      <TodoComponent />
    </Wrapper>
  )
}

export default App
