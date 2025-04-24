import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import UserTwo from './UserTwo.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <App>
      This is App Component
      <button>Like</button>
      <button>Share</button>
      <button>Subscribe</button>
    </App>
    <UserTwo/>
  </>
  
)