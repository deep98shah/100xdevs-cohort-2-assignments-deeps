import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'

function App() {
  const [todoId, setTodoId] = useState(1)
  return (
    <div>
      <Button id={1} setTodoId={setTodoId}></Button>
      <Button id={2} setTodoId={setTodoId}></Button>
      <Button id={3} setTodoId={setTodoId}></Button>
      <Button id={4} setTodoId={setTodoId}></Button>
      <Todo id={todoId}></Todo>
    </div>
  )
}

const Button = React.memo(function Button(props) {
  function handleOnClick() {
    props.setTodoId(props.id)
  }
  return <button onClick={handleOnClick}>{props.id}</button>
})

function Todo({id}) {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todo?id=' + id).then(async (res) => {
      const todo = await res.data.todo
      setTodo(todo)
    })
  }, [id])

  return (
        <div>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </div>
      )
}
export default App
