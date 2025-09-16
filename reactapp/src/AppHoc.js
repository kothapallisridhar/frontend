import React from 'react'
import { HOC } from './components/HOC'

const AppHoc = ({name}) => {
  return (
    <div>
      <h1>Welcome {name}, You are logged in!</h1>
    </div>
  )
}

export default HOC(AppHoc)
