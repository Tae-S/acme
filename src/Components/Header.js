import './headerStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header()
{
    return(
        <header>
            <ul className='nav-ul-left'>
                <li className='nav-li'>
                    <Link to='/' className='nav-link logo'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>Acme</span>
                    </Link>
                </li>
            </ul>
            <ul className='nav-ul-right'>
                <li className='nav-li'>
                    <Link to='/books' className='nav-link'>Books</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/blog' className='nav-link'>Blog</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/login' className='nav-link'>Login</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/basket' className='nav-link basket'>
                        <span>
                            <img src={logo} alt='Shopping logo' />
                            Basket</span>
                        <span>0</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header