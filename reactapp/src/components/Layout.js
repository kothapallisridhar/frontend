import React from 'react'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

export const Layout = ({name}) => {
  return (
    <>
      <Header name={name}/>
      <Body name={name}/>
      <Footer name={name}/>
    </>
  )
}
