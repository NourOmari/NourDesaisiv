import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: import.meta.env.VITE_APP_API_KEY,
            },
          }
        );
        console.log("response:${response}");
        console.log(response.data);
        setRecipeInfo(response.data);
      } catch (error) {
        console.error("Error fetching recipe information:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeInfo();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!recipeInfo) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipeInfo.title}</h1>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
      <p>{recipeInfo.instructions}</p>
    </div>
  );
}

export default Recipe;
