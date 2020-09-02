import React from 'react'
import Index1 from './components/Launch/Index'
import Index2 from './components/LaunchDetails/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
const App = () => {
  return (
    <>
      <ProSidebar >
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu icon='🚀'>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>;
      {/* <Router>
        <Routes>
          <Route path='/' element={<Index1 />} >
            <Route path=':index' element={<Index2 />} />
          </Route>
        </Routes>
      </Router> */}
    </>
  )
}

export default App
