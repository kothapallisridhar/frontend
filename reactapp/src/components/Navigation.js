import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {
  return (
    <div className='nav-bar'>
        <ul>
            <Link className='nav-item' to="/">Home</Link>
            <Link className='nav-item' to="/products">Products</Link>
            <Link className='nav-item' to="/services">Services</Link>
            <Link className='nav-item' to="/about">About Us</Link>
            <Link className='nav-item' to="/contact">Contact Us</Link>
        </ul>
    </div>
  )
}
