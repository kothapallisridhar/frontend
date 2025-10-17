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
      {hasClicker && <Clicker/>}
    </>
  )
}

export default App
