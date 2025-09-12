import React from 'react'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

export const Layout = ({person, name}) => {
  return (
    <>
      <Header person={person}/>
      <Body person={person}/>
      <Footer person={person}/>
    </>
  )
}
