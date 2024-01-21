import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Todo1',
      desc: 'Todo desc 1',
      completed: 'true'
    },
    {
      title: 'Todo2',
      desc: 'Todo desc 1',
      completed: 'true'
    }
  ])

  return (
    <div>
      <CustomButton todos={todos} setTodos={setTodos}></CustomButton>
      {todos.map((todo) => {
        return <Todo title={todo.title} desc={todo.desc} completed={todo.completed}></Todo>
      })}
    </div>
  )
}

function CustomButton(props) {
  function addTodo() {
    props.setTodos([...props.todos, {title: 'new todo', desc: 'new desc', completed: 'false'}])
  }
  return <button onClick={addTodo}>Add todo</button>
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
      <h2>{props.completed}</h2>
    </div>
  )
}

export default App
