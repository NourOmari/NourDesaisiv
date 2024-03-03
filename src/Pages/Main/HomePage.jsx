import React, { useState } from "react";
import SearchBar from "../../Shared/Components/SearchBar";
import RecipeCard from "../../Shared/Components/RecipeCard";
import axios from "axios";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey,
            query: searchTerm,
          },
        }
      );
      setRecipes(res.data.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoToRecipe = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information`,
        {
          params: {
            apiKey,
          },
        }
      );
      console.log("Recipe information:", response.data);
    } catch (error) {
      console.error("Error fetching recipe information:", error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-medium mb-4 text-orange">
        Search your Favorite Recipe
      </h2>
      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        setSearchTerm={setSearchTerm}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {recipes.map((recipe, i) => (
          <RecipeCard
            key={i}
            recipe={recipe}
            handleGoToRecipe={handleGoToRecipe}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

/*import React, { useState, useEffect } from "react";
import SearchBar from "../../Shared/Components/SearchBar";
import RecipeCard from "../../Shared/Components/RecipeCard";
import axios from "axios";
import recipe from "../../Db/data";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          headers: {
            apiKey: "bba42f6513d64ba19584b174ed2010da",
          },
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-medium mb-4 text-orange">
        Search your Favorite Recipe
      </h2>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {currentItems.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Pagination */
/*<div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;*/
