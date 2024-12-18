import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0);
  let stock = 10;

  return (
    <>
    <h2>React Counter App</h2>
    <div className='Wrapper'>
      <button className='minus' disabled={counter === 0} onClick={()=>{
        if(counter > 0) {
          setCounter(counter - 1);
        }
      }}>-</button>
      <p className='counter'>{counter}</p>
      <button className='plus' disabled={counter === stock} onClick={()=>{
        if(counter < 10) {
          setCounter(counter + 1);
        }
      }}>+</button>
    </div>
    </>
  )
  
}

export default App
