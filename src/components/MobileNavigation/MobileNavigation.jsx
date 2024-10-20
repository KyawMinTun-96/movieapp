import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import './MobileNavigation.css'
import { MdLocalMovies } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { MdLiveTv } from "react-icons/md";
import { LiaSistrix } from "react-icons/lia";

const MobileNavigation = () => {

    const [isActive, setIsActive] = useState('home');

  return (
    <div className='mobile-navbar'>
        <div className='container'>
            <div className='mobile-menu'>
                <NavLink  
                to='/'
                onClick = {() => setIsActive('home')} 
                className ={`menu-item ${isActive === 'home' ? 'mobile-active' : ''}`} >
                    <LiaHomeSolid className='menu-icon' />
                    <span>Home</span>
                </NavLink>
                <NavLink 
                to='/tv'
                onClick = {() => setIsActive('tv')} 
                className ={`menu-item ${isActive === 'tv' ? 'mobile-active' : ''}`}
                >
                    <MdLiveTv className='menu-icon' />
                    <span>TV Shows</span>
                </NavLink>
                <NavLink 
                to='/movie'
                onClick = {() => setIsActive('movie')} 
                className ={`menu-item ${isActive === 'movie' ? 'mobile-active' : ''}`}
                >
                    <MdLocalMovies className='menu-icon' />
                    <span>Movies</span>
                </NavLink>
                <NavLink 
                to='/search'
                onClick = {() => setIsActive('search')} 
                className ={`menu-item ${isActive === 'search' ? 'mobile-active' : ''}`}
                >
                    <LiaSistrix className='menu-icon' />
                    <span>Search</span>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default MobileNavigation
