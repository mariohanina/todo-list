import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
