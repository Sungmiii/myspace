import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navlink">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/">Blog</NavLink></li>
                <li><NavLink exact to="/">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav