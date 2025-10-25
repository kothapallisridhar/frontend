import React, { useState, useEffect } from "react";

function Products() {
  var [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);

  return (
    <div className="border border-3 p-2  m-2 border-info">
      <h1>Products Length: {products.length}</h1>
      <table className="table">
        {products.map((product) => {
          return (
            <tr className="border border-1 border-info">
              <td className="border">{product.id}</td>
              <td className="border">{product.title}</td>
              <td className="border">{product.description}</td>
              <td className="border">{product.price}</td>
              <td className="border">{product.rating.rate}</td>
              <td className="border">
                <img width="50px" src={product.image} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Products;
