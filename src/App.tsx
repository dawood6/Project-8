import React from 'react'
import Index1 from './components/Launch/Index'
import Index2 from './components/LaunchDetails/Index'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Launch from './components/Launch'
import Navbar from './components/Navbar/Navbar'
const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Launch' element={<Launch />} >
            <Route path='/' element={<Index1 />} />
            <Route path=':index' element={<Index2 />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
