import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  const count = useMemo(() => {
    let sum = 0
    for (let index = 1; index <= inputValue; index++) {
      sum += index
    }
    return sum
  }, [inputValue])

  return (
    <div>
      <input type='number' onChange={(e) => {
        setInputValue(e.target.value)
      }}></input>
      <h4>Sum is {count}</h4>
      <br></br>
      <button onClick={() => {
        setCounter(counter+1)
      }}>Count is {counter}</button>
    </div>
  )
}

export default App
