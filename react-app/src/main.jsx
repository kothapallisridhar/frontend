import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

const r3f = 'React 3 Fiber'

root.render(
  <div>
    <h1 className='main-title'>Hello React
    </h1>
    <h2> {r3f}</h2>
    <p>Welcome to R3F</p>
    <p>{Date.now()}</p>
    <p>{1 + 5}</p>
    <p>Sridhar Kothapalli</p>
    <p>Creative Developer | React | R3F | Spring Boot</p>

  </div>
  
)