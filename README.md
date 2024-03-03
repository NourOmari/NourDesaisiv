# Recipe Search Web Application

This web application is designed to allow users to search for recipes using keywords or specific ingredients and view detailed information about each recipe. The application utilizes Vite + React framework for efficient development and Tailwind CSS for styling, ensuring a user-friendly interface.

## Features

- **Search Recipes:** Users can search for recipes on the homepage using keywords or specific ingredients.
- **Display Recipe Information:** Detailed information about each recipe is displayed when the user selects a search result.

## Design Decisions

- **Vite + React Framework:** Vite was chosen as the build tool for its fast development server and efficient hot module replacement. React's component-based architecture makes it easy to manage complex UI components.
- **Tailwind CSS:** Tailwind CSS was used for styling to facilitate rapid UI development and maintainability through utility-first classes.
- **Client-Side API Calls:** API calls are made directly from the client side to ensure real-time data updates and to avoid the need for server-side infrastructure.
- **Dynamic Results:** API calls are dynamic based on user queries to provide relevant and up-to-date recipe results.

## User-Friendly Interface

The UI is designed to be intuitive and user-friendly, allowing users to easily search for recipes and view detailed information.

## Running the Application

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Create a `.env` file in the root directory and add your Spoonacular API key:
5. Run `npm start` to start the development server.
6. Open your browser and navigate to `http://localhost:3000`.

