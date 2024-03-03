import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleNavigateToRecipe = (recipeId) => {
    navigate(`/Recipes/${recipeId}`);
  };

  if (!recipe || !recipe.image) {
    return null;
  }

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="rounded-xl" />
      <div className="recipe-card-title font-bold">
        <h3>{recipe.title}</h3>
        <Button
          className="bg-orange text-beige hover:bg-lightsteelb rounded-xl"
          onClick={() => handleNavigateToRecipe(recipe.id)}
        >
          Go to Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;

/*import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGoToRecipe = (recipeId) => {
    navigate(`/recipe/${recipeId}`); // Navigate to the recipe page
  };

  // Check if recipe is not defined or does not have image property
  if (!recipe || !recipe.image) {
    return null; // Return null to render nothing
  }

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="rounded-xl" />
      <div className="recipe-card-title font-bold">
        <h3>{recipe.title}</h3>
        <Button
          className="bg-orange text-beige hover:bg-lightsteelb rounded-xl"
          onClick={() => handleGoToRecipe(recipe.id)}
        >
          Go to Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;*/
