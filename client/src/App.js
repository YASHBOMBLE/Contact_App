import React from 'react'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App