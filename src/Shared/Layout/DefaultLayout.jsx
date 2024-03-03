import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundary";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <Navbar />
      <main className="flex-grow mx-auto max-w-screen-2xl bg-lp p-4 md:p-6 2xl:p-10">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <div>
        <footer className="flex-shrink-0 bg-olive-green shadow px-6 py-3">
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <span className="text-sm text-lightsteelb">
              © 2024 Food Recipes. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default DefaultLayout;
