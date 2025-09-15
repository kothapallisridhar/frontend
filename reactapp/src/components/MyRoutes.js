import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Products } from './Products'
import { About } from './About'
import { ContactUs } from './ContactUs'
import { Services } from './Services'

export const MyRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
    </Routes>  
    </>
  )
}
