import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
   <Router>
            <Routes>

              <Route exact path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          
    </Router>  
    </>
  )
}

export default App
