import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <button className='plus' onClick={()=> {
        if(count > 0)
          setCount(count - 1)
        }} disabled={count == 0}>-</button>
      <p>{count}</p>
      <button className='minus' onClick={()=> {
        if(count < 10) 
          setCount(count + 1)
        }} disabled={count == 10}>+</button>
    </div>
  )
}

export default Counter