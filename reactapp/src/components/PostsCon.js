import React, { useState } from 'react'
import { useContextAPI } from '../index'

export const PostsCon = () => {
  const [name, setName] = useState({});  
  return (
    <div>
        <useContextAPI.Consumer>
            {value => setName(value)}
        </useContextAPI.Consumer>
        <h1>Id: {name.id}</h1>
        <h1>Name: {name.name}</h1>
        <h1>City: {name.city}</h1>
    </div>
  )
}
