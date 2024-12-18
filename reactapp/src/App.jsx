import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='Wrapper'>
       <h1>Change the background color</h1>
       <input type="color" name="color" id="color" onChange={(e)=>{
          document.body.style.background = e.target.value;
       }}/>
      </div>
    </>
  )
}

export default App
