import React from "react";
import { useGetAllRecipesQuery } from "../../services/recipesApi";

function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();
  return (
    <div className="border border-3 p-3 m-2 border-danger">
      <h1>Recipes</h1>
      {isLoading && <h4>Loading Recipes...</h4>}
      {!isLoading && (
        <ul className="d-flex flex-wrap list-unstyled justify-content-between">
          {data?.recipes.map((recipe) => {
            return (
              <li className="p-5 ">
                <h4>{recipe.name}</h4>
                <img src={recipe.image} width="200px" alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
