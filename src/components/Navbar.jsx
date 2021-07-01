import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from "./Ghibli-image.jpg"
import './Navbar.css'

const Navbar = () => {
    
    return (
        
        <nav className = 'navbar'>
            <a href="https://ghiblicollection.com/" target = '_blank'><img src= {logo} alt="Loading" className = 'nav-image'></img></a>
            <ul className = 'nav-links'>
            <li className = 'nav-item'>
            <NavLink to = '/' exact activeClassName="active" className = 'link'>Home</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/films' className = 'link' activeClassName="active">Films</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/people' activeClassName="active" className = 'link'>People</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/locations' className = 'link' activeClassName="active">Locations</NavLink>
            </li>
            </ul>


        </nav>
     
    )
}

export default Navbar