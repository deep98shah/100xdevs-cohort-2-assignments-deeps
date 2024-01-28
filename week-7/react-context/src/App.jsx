import { useState } from 'react'
import './App.css'
import { CountContext } from './Context'
import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
      <Even></Even>
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      Count {count}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)

  return (
    <div>
      <button onClick={() => {
        setCount(count => count+1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count => count-1)
      }}>Decrement</button>
    </div>
  )
}

function checkAndReturnEven(count) {
  if (count % 2 == 0) {
    return 'It is even'
  }
}

function Even() {
  const value = useRecoilValue(evenSelector)
  return <div>{!value ? 'It is even' : null}</div>
}

export default App
