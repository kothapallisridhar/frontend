import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";

function ProductsNew() {
  var { isLoading, data } = useGetAllProductsQuery();
  return (
    <div className="border border-3 border-warning m-2">
      <h1>ProductsNew</h1>
      {isLoading && <h5>Loading...</h5>}
      {!isLoading && (
        <ul className="d-flex flex-wrap list-unstyled justify-content-between">
          {data?.products.map((prod) => {
            return (
              <li className="p-5 ">
                <h4>{prod.title}</h4>
                <img src={prod.thumbnail} width="200px" alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ProductsNew;
