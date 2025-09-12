import React from 'react'

export const Header = ({person}) => {
    const {id, fname, lname, desig} = person;
  return (
    <div>
        <div>
            <span>Id: {id}</span>
        </div>
        <div>
            <span>Name: {fname} {lname}</span>    
        </div>
        <div>
            <span>Desingnation: {desig}</span>    
        </div>

    </div>
  )
}
