import React from 'react'

export const Footer = ({person}) => {

    const {fname} = person;
  return (
    <div>
        <h1>My name is: {fname}</h1>
    </div>
  )
}
