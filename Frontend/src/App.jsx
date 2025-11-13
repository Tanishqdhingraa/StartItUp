import React from 'react'
import Home from './assets/pages/Home'
import About from "./assets/pages/About"
import Prteam from "./assets/pages/Prteam"
import  Invest from "./assets/pages/Invest"
import Publish from "./assets/pages/Publish"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/investors" element={< Invest/>} />
      <Route path="/pr-team" element={<Prteam />} />
      <Route path="/publish" element={< Publish/>} />
       <Route path="/login" element={< Login/>} /> 
       <Route path="/signup" element={< Signup/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
