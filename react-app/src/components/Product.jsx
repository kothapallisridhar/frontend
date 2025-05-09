import React from 'react'

const Product = (p) => {
  // object destructuring
  const {id, name, aprice, dprice} = p
  
  return (
    <div>
        <h2>Product name: {name}</h2>
        <h2>Product id: {id}</h2>
        <h2>Product price: {aprice}</h2>
        <h2>Product offer price: {dprice}</h2>
    </div>
  )
}

export default Product