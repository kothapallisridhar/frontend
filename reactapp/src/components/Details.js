import React, { useState } from 'react'
import { useContextAPI } from '../index'

export const Details = () => {
  const [data, setData] = useState({});

  return (
    <div>
        <useContextAPI.Consumer>
            {value => setData(value)}
        </useContextAPI.Consumer>
        <h1>My Id: {data.id}</h1>
        <h1>My Name: {data.name}</h1>
        <h1>My City: {data.city}</h1>
    </div>
  )
}
