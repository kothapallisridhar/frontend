import React from 'react'

export const Body = ({person}) => {
    const {id, fname, lname, desig} = person;
  return (
    <div>
        <h4>Id: {id}</h4>
        <h4>Name: {fname} {lname}</h4>
        <h4>Designation: {desig}</h4>
    </div>
  )
}
