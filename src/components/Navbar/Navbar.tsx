import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
const Navbar = () => {
    const [color, setColor] = useState('')
    const [color2, setColor2] = useState('')
    
    return (
        <div>
            <div className="container">
                <nav className='navigation'>
                    <img src={logo} alt="" width="130" className='navlogo' />
                    <ul>
                        <li className='navli' onClick={() => {
                            setColor('linear-gradient(rgba(103, 135, 211, .6), rgba(144, 25, 166, .6))') 
                            setColor2('transparent')}} style={{ background: color }}><Link to='/'>Home</Link></li>
                        <li className='navli' onClick={() => {
                            setColor2('linear-gradient(rgba(103, 135, 211, .6), rgba(144, 25, 166, .6))') 
                            setColor('transparent')}} style={{ background: color2 }}><Link to='Launch'>Launches</Link></li>
                        <a href='https://github.com/dawood6' className='sociala' target='_blank'><li className='socialli'><FontAwesome name='github' /></li></a>
                        <a href='https://www.facebook.com/daudsadiq.daud/' className='sociala' target='_blank'><li className='socialli'><FontAwesome name='facebook' /></li></a>
                        <a href='https://www.instagram.com/dawoodsadiq06/' className='sociala' target='_blank'><li className='socialli'><FontAwesome name='instagram' /></li></a>
                        <a href='https://www.linkedin.com/in/dawood-sadiq-739178199/' className='sociala' target='_blank'><li className='socialli'><FontAwesome name='linkedin' /></li></a>
                        <a href='https://www.youtube.com/channel/UCXSgKNcpasy3p3osTVczVmw?' className='sociala' target='_blank'><li className='socialli'><FontAwesome name='youtube' /></li></a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
