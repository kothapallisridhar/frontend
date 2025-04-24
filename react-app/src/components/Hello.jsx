
import React from 'react'

const Hello = () => {
  return (
    React.createElement('div', 
        {id: 'hello', className: 'hello'}, 
        React.createElement('h2', null, 'Hello Sridhar'))
  )
}

export default Hello