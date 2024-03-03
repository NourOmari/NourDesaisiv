import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../../" 
import HomePage from "./Pages/Main/HomePage";
import Recipes from "./Pages/Recipes/Recipes";
import Recipe from "./Pages/Recipes/Recipe";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/homepage" element={<HomePage />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
