import React from 'react'
import {NavLink} from 'react-router-dom'
import './MobileNavigation.css'
import { MdLocalMovies } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { MdLiveTv } from "react-icons/md";
import { LiaSistrix } from "react-icons/lia";

const MobileNavigation = () => {
  return (
    <div className='mobile-navbar'>
        <div className='container'>
            <div className='mobile-menu'>
                <a className='menu-item' href='/'>
                    <LiaHomeSolid className='menu-icon' />
                    <span>Home</span>
                </a>
                <NavLink className='menu-item' to='/explore'>
                    <MdLiveTv className='menu-icon' />
                    <span>TV Shows</span>
                </NavLink>
                <a className='menu-item' href='/'>
                    <MdLocalMovies className='menu-icon' />
                    <span>Movies</span>
                </a>
                <NavLink className='menu-item' to='/search'>
                    <LiaSistrix className='menu-icon' />
                    <span>Search</span>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default MobileNavigation
