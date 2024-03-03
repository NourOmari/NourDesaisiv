import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const HomePage = lazy(() => import("./Pages/Main/HomePage"));
const Recipes = lazy(() => import("./Pages/Recipes/Recipes"));
const Recipe = lazy(() => import("./Pages/Recipes/Recipe"));

const router = createBrowserRouter([
  {
    path: "/",
    title: "Home",
    Component: HomePage,
  },
  {
    path: "/homepage",
    title: "HomePage",
    Component: HomePage,
  },
  {
    path: "/recipes",
    title: "Recipes",
    Component: Recipes,
  },
  {
    path: "/Recipes/:id",
    title: "Recipe",
    Component: Recipe,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
