import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import Question4 from './pages/Question4'
import Question5 from './pages/Question5'
import Question6 from './pages/Question6'
import Question7 from './pages/Question7'

function App() {

  return (
    <div>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path='/question1' element={<Suspense fallback='loading...'><Question1></Question1></Suspense>}></Route>
          <Route path='/question2' element={<Suspense fallback='loading...'><Question2></Question2></Suspense>}></Route>
          <Route path='/question3' element={<Suspense fallback='loading...'><Question3></Question3></Suspense>}></Route>
          <Route path='/question4' element={<Suspense fallback='loading...'><Question4></Question4></Suspense>}></Route>
          <Route path='/question5' element={<Suspense fallback='loading...'><Question5></Question5></Suspense>}></Route>
          <Route path='/question6' element={<Suspense fallback='loading...'><Question6></Question6></Suspense>}></Route>
          <Route path='/question7' element={<Suspense fallback='loading...'><Question7></Question7></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {
        navigate('/question1')
      }}>Question 1</button>
      <button onClick={() => {
        navigate('/question2')
      }}>Question 2</button>
      <button onClick={() => {
        navigate('/question3')
      }}>Question 3</button>
      <button onClick={() => {
        navigate('/question4')
      }}>Question 4</button>
      <button onClick={() => {
        navigate('/question5')
      }}>Question 5</button>
      <button onClick={() => {
        navigate('/question6')
      }}>Question 6</button>
      <button onClick={() => {
        navigate('/question7')
      }}>Question 7</button>
    </div>
  )
}

export default App
