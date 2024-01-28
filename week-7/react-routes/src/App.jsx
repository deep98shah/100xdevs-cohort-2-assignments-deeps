import { useState} from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path='/' element={<Suspense fallback='loading...'><Landing/></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback='loading...'><Dashboard/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => {
      navigate('/')
    }}>Landing</button>
    <button onClick={() => {
      navigate('/dashboard')
    }}>Dashboard</button>
  </div>
}

export default App
