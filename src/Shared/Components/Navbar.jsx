import React from "react";
import { FaBowlFood } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-olive-green px-6 py-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-3 justify-between">
          <FaBowlFood className="text-2xl text-orange justify-start" />
          <div className="text-lightsteelb text-xl font-bold justify-start">
            Food Recipes
          </div>
          <ul className="flex space-x-4 text-xl text-lightsteelb dark:lightsteelb">
            <li>
              <a href="../../HomePage" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="../../Recipes
              "
                className="hover:text-gray-300"
              >
                Recipes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
