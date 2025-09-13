import React from 'react'
import './card.css'

export const Card = ({pic, pname, role, doj}) => {
  return (
    <div>
        <div className='card-container'>
        <img className='image-avatar' src={pic} alt='1'/>
        <div className='card-details'>
            <label className='label-width'>Name: {pname}</label>
            <label className='label-width'>Role: {role}</label>
            <label className='label-width'>DOJ: {doj}</label>
        </div>
        </div>
    </div>
  )
}
