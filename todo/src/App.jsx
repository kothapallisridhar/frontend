import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>ToDo list</h2>
      <ToDo/>
    </>
  )
}

export default App
