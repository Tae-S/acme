import './headerStyles.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'

function Header()
{
    const basketList = useSelector(state => state.basket.value)
    useEffect(()=>{
        const _basket = document.querySelector('.basket-item-count')
        if(basketList.length > 0){
            _basket.classList.add('basket-anim')
        }
        else{
            _basket.classList.remove('basket-anim')
        }
    }, [basketList])
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
                        <span className='basket-item-count'>{basketList.length}</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header