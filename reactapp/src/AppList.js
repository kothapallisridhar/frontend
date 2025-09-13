import React from 'react'
import './App.css'
import { Card } from './components/Card'
import { profiles } from './components/profiles'

export const AppList = () => {
  return (
    <div>
      {profiles.map((element) => {
        return (
          <Card pic={element.pic} pname={element.pname} role={element.role} doj={element.doj}/>
        )
      })}
        
        
    </div>
  )
}
