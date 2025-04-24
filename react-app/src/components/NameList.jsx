import React from 'react'

function NameList() {
  const names = ['Ben', 'Clark','Glock']
  
  return (
    <div>{ names.map(name => <h2>{name}</h2>)
        }</div>
  )
}

export default NameList