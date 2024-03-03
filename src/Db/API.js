const searchRecipes = async (searchTerm, page) => {
  const baseURL = new URL("https://api.spoonacular.com/recipes/complexSearch");
  baseURL.searchParams.append("searchTerm", searchTerm);
  baseURL.searchParams.append("page", page.toString());

  const response = await fetch(baseURL.toString());

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

export { searchRecipes };
