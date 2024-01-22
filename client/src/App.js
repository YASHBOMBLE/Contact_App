import React from 'react'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './views/Signup/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App