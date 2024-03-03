import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar({ handleSearchSubmit, searchTerm, setSearchTerm }) {
  //lifting state up
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            id=""
            required
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Search Recipes ..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

/*import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?q=${searchTerm}&apiKey=${"bba42f6513d64ba19584b174ed2010da"}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            required
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Search Recipes ..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>Recipe Image Location: {recipe.image}</p>
          <p>Recipe Title: {recipe.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;*/
