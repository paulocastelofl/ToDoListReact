import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/home' element={<Home/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
