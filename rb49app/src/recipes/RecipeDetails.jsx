import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";

function RecipeDetails() {
  var x = useParams();
  var selectedRecipe = recipes.recipes.find((recipe) => {
    if (recipe.id == x.id) {
      return true;
    }
  });
  console.log(x);
  return (
    <div>
      RecipeDetails
      <h3>{selectedRecipe.name}</h3>
      <img width="200px" src={selectedRecipe.image} />
      <h3>Ingredients</h3>
      <ul>
        {selectedRecipe.ingredients.map((ing) => {
          return <li>{ing}</li>;
        })}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {selectedRecipe.instructions.map((ins) => {
          return <li>{ins}</li>;
        })}
      </ol>
    </div>
  );
}

export default RecipeDetails;
