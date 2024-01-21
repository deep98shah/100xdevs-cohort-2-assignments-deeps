import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([{
    title: 'Go to gym',
    desc: 'Test description',
    completed: 'False'
  }])

  useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:3000/todos').then(async (res) => {
        const json = await res.json();
        console.log(json)
        setTodos(json.todos)
    })
    }, 5000)
  }, [])

  return (
    <div>
      <div>
        <h1 id='app-name'>Todo app</h1>
      </div>
      <div>
        <div id='todo-parent'>
          <CreateTodo></CreateTodo>
          <Todos todos={todos}></Todos>
        </div>
      </div>
    </div>
  )
}

export default App
