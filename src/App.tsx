import React from 'react'
import Index1 from './components/Launch/Index'
import Index2 from './components/LaunchDetails/Index'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './App.css'
import Home from './components/Home';
import Launch from './components/Launch'
import Navbar from './components/Navbar/Navbar'
const App = () => {

  return (
    <>
      <Router>
        {/* <header>
          <nav>
            <h1 className="logo"><a href="#">SpaceX</a></h1>
            <ul>
              <li className='navli'><Link to='/'><FontAwesome name='home' size='3x' /></Link></li>
              <li className='navli'><Link to='/Launch'><FontAwesome name='rocket' size='3x' /></Link></li>
              <li className='navli'><a href="https://github.com/dawood6" target='_blank' rel="noopener noreferrer"><FontAwesome name="github" size='3x' /></a></li>
            </ul>
          </nav>
        </header> */}
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
