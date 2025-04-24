import './App.css'
import User from './User'
import UserTwo from './UserTwo'
import { useState } from 'react'

// function displayMessage() {
//   alert("Hello")
// }

function App(props) {
  const [count, setCount] = useState(0)

  console.dir(props)

  return (
    <>
    <h2 style={{display: 'flex', gap: 20, color: 'orange'}}>{props.children}</h2>
      <label htmlFor="">Count: {count}</label>
      <br />
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App
