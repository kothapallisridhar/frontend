import React from 'react'

function NameList() {
  const students = [{name: 'Ben', id: 1}, {name: 'Van', id: 2}, {name: 'Zen', id: 3}]
  
  return (
    <div>{ students.map(student => <h2 key={student.id}>{student.name}</h2>)
        }</div>
  )
}

export default NameList