import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <h1>React App</h1>
      <h2>Fancy name</h2>
      <h3>Sub title</h3>
    </App>
  </StrictMode>,
)
