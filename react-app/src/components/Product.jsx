import React from 'react'

function Product({id, name, price, nprice}) {
  return (
    <div><h2>Product</h2>
        <h3>Name: {name}</h3>
        <h3>Id: {id}</h3>
        <h3>Price: {price}</h3>
        <h3>Offer Price: {nprice}</h3>
    </div>
  )
}

export default Product;