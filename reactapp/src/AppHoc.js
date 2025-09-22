import React from 'react'
import { HOC } from './components/HOC'

const AppHoc = ({uname, authHandler}) => {
  return (
    <div>
      <h1>Welcome {uname}, You are logged in!</h1>
      <button onClick={authHandler}>Logout</button>
    </div>
  )
}

export default HOC(AppHoc)
