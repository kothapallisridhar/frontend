import React from "react";
import recipes from "../assets/recipes.json";
import { Link } from "react-router-dom";

function RecipesMaster() {
  return (
    <div>
      RecipesMaster
      <ul>
        {recipes.recipes.map((recipe) => {
          return (
            <li>
              <Link to={`/recipeDetails/${recipe.id}`}>{recipe.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipesMaster;
