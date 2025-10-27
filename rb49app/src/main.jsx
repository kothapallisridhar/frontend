import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "./todos/TodoList";
import Counter from "./counter/Counter";
import StudentsTable from "./students/StudentsTable";
import Products from "./products/Products";
import RecipesMaster from "./recipes/RecipesMaster";
import RecipeDetails from "./recipes/RecipeDetails";
import AppRedux from "./AppRedux";
//import { store } from "./store/store";
import { store } from "./app/store";
import { Provider } from "react-redux";

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <TodoList></TodoList>,
      },
      {
        path: "/studentslist",
        element: <StudentsTable></StudentsTable>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/recipes",
        element: <RecipesMaster></RecipesMaster>,
      },
      {
        path: "/recipeDetails/:id",
        element: <RecipeDetails></RecipeDetails>,
      },
    ],
  },
]);
*/

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRedux />
  </Provider>
);
