import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  return (
    <div>
      {console.log(uuidv4())}
    </div>
  )
}

export default App