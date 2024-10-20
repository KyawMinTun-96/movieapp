import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/images/others/assets'
import { LiaSistrix } from "react-icons/lia";

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='nav'>
      <div className='container navbar'>
        <div className='nav-left'>
          <img src={assets.logo} alt='logo' className='logo' />

          <ul className='navbar-menu'>
            <li><Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link></li>
            <li><Link to='/movie' onClick={() => setMenu('movies')} className={menu === 'movies' ? 'active' : ''}>Movies</Link></li>
            <li><Link to='/tv' onClick={() => setMenu('tv-shows')} className={menu === 'tv-shows' ? 'active' : ''}>TV Shows</Link></li>
          </ul>
        </div>

        <div className='navbar-right'>

          <form className='search-form'>
            <input type='text' placeholder='Search here...' />
            <button className='btn-search'>
              <LiaSistrix className='search-icon' />
            </button>
          </form>

          <button className='btn-signin'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
