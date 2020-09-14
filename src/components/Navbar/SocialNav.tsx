import React from 'react'
import './SocialNav.css'
const SocialNav = () => {
    return (
        <div>
            <nav className="social">
                <ul>
                    <li className="twitter"><a href="https://codepen.io/collection/XdWJOQ/">Twitter<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="facebook"><a href="https://codepen.io/collection/XdWJOQ/">Facebook<i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li className="google-plus"><a href="https://codepen.io/collection/XdWJOQ/">Google plus<i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="instagram"><a href="https://codepen.io/collection/XdWJOQ/">Instagram<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SocialNav
