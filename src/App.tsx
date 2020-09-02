import React from 'react'
import Index1 from './components/Launch/Index'
import Index2 from './components/LaunchDetails/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index1 />} >
          <Route path=':index' element={<Index2 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
