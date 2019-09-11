import React, {Fragment} from 'react'
import { NavLink, Redirect } from 'react-router-dom'


    const Navbar = ({ updateUser, logged_in }) => {
        let logout = () => {
          localStorage.clear()
        }
       
    return(
        <ul className='navBar'>
            { logged_in !== null? (<Fragment>
            (<NavLink className='link' to='/home'>Home</NavLink>
            <NavLink className='link' to='/upcoming' >Upcoming Events</NavLink>
            <NavLink className='link' to='/past'>Past Events</NavLink>
            <NavLink className='link' to='/new'>Create New Event</NavLink>
            <NavLink className='link' to='/logout' onClick={logout}>Logout <Redirect to='/login'/></NavLink>
            </Fragment>)
            :
                <NavLink className='link' to='/login'>Login</NavLink>
            }
        </ul>
    )
}


export default Navbar