import React from 'react'
import './Home.css'
import rocket from '../images/undraw_Outer_space_drqu.png'
import { Link } from 'react-scroll'
import Footer from './Footer'

const Home = () => {

    return (
        <div className='home'>
            <h1 className='homeh1'>Welcome To The Whole New Experience</h1>
            <div>
                <svg className="arrows">
                    <Link activeClass="active" className="test1" to="homepart1" spy={true} smooth={true} duration={500} >
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </Link>
                </svg>
            </div>
            <div className='homepart1' id='homepart1'>
                <img src={rocket} className='homeimg' alt='' />
                <span className='homecontent'>
                    <h3>Go To Launch To See Our Cool Missions</h3>
                </span>
            </div>
            <div>
                {/* <Cards /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home       
