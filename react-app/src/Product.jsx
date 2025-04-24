
import React from 'react'

class Product extends React.Component {

    state = {
        product: 'Samsung Galaxy S25',
        price: 150000
    }
    constructor() {
        super()
        this.updatePrice = this.updatePrice.bind(this)
    }
    updatePrice() {
        let p = document.getElementById('price').value 
        console.log(p)
        this.setState({
            price: p
        })
    }
    render() {
        return (
            <>
                <h2>Product: {this.state.product}</h2>
                <p>Price: {this.state.price}</p>

                <input type="number" name="" id="price" />
                <button onClick={this.updatePrice}>Update</button>
            </>
        )
    }
}
export default Product;