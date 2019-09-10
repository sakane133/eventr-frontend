import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return(
        <ul className='navBar'>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/upcoming'>Upcoming Events</NavLink>
            <NavLink className='link' to='/past'>Past Events</NavLink>
            <NavLink className='link' to='/new'>Create New Event</NavLink>
            <li><a href="#logout">Logout</a></li>
        </ul>
    )
}


export default Navbar