import { useState } from 'react';
import Clicker from './Clicker.jsx'

function App({children}) {

  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0)

  function toggleClicker() {
    setHasClicker(!hasClicker);
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {children}
      <div>Total count: {count}</div>
      <button onClick={toggleClicker}>{hasClicker ? 'Hide Clicker' : 'Show Clicker'}</button>
      {hasClicker && 
      <>
      <Clicker increment={increment} keyName='countA' color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}/>
      </>}
    </>
  )
}

export default App
