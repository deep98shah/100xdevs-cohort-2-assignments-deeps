import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import { useEffect } from 'react'
import axios from 'axios'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <div>
      <h1>Todo app</h1>
      <RecoilRoot>
        <div id='todo-parent'>
          <CreateTodo></CreateTodo>
          <Todos></Todos>
        </div>
      </RecoilRoot>
    </div>
  )
}

export default App
