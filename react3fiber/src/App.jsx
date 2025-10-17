import { useState } from 'react';
import Clicker from './Clicker.jsx'

function App() {

  const [hasClicker, setHasClicker] = useState(true);

  function toggleClicker() {
    setHasClicker(!hasClicker);
  }

  return (
    <>
      <button onClick={toggleClicker}>{hasClicker ? 'Hide Clicker' : 'Show Clicker'}</button>
      {hasClicker && 
      <>
      <Clicker keyName='countA' color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}/>
      <Clicker keyName='countB' color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}/>
      <Clicker keyName='countC' color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}/>
      </>}
    </>
  )
}

export default App
