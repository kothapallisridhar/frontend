import './App.css'
import { useState } from 'react'
import Product from './components/Product';

function App() {
  let [counter, setCounter] = useState(0);
  let stock = 10;
  let prod = {
    id: 123,
    name: "Mac Book Pro",
    price: 300000,
    nprice: 289999
  }

  return (
    <>
    <h2>TODO App</h2>
    <div>
      <input></input>
      <button>Add</button>
    </div>
    <div>
      <ul>
        <li>Learn React</li>
        <li>Learn Redux</li>
        <li>Learn Angular</li>
      </ul>
    </div>
    
    </>
  )
  
}

export default App
