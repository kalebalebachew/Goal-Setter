import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Goal-Setter</Link>
        </div>

        <ul>
            <li>
                <Link to = '/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
            <li>
                <Link to = '/signup'>
                    <FaUser/> Signup
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default header
