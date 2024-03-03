/*import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const HomePage = lazy(() => import("../Pages/HomePage"));
const Recipes = lazy(() => import("../Pages/Recipes"));
const Recipe = lazy(() => import("../Pages/Recipe"));

const coreRoutes = [
 {
    path: "/homepage",
    title: "HomePage",
    component: HomePage,
  },
  {
    path: "/recipes",
    title: "Recipes",
    component: Recipes,
  },
  {
    path: "/recipes/:id",
    title: "Recipe",
    component: Recipe,
  },
] ;
const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {coreRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact
          render={(props) => <route.component {...props} />}
        />
      ))}
    </Suspense>
  );
};
export default Routes;*/
