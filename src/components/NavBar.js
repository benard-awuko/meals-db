import React from "react";
// import logo from '../logo.svg'
import {Link} from 'react-router-dom'
let NavBar = ()=>{

    return <nav className="navbar">
             <div className="nav-center">
            <Link to='/'>    <img src='images/logo.png' className='logo' alt='logo'>
                </img></Link>
                <ul className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='about'>About</Link>
                </ul>

             </div>
        </nav>


}

export default NavBar;
