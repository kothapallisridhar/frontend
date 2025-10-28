import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "./todos/TodoList";
//import Counter from "./counter/Counter";
import StudentsTable from "./students/StudentsTable";
import Products from "./products/Products";
import RecipesMaster from "./recipes/RecipesMaster";
import RecipeDetails from "./recipes/RecipeDetails";
import AppRedux from "./AppRedux";
//import { store } from "./store/store";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter";
import Leads from "./features/leads/Leads";
import AddLead from "./features/leads/AddLead";
import EditLead from "./features/leads/EditLead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRedux></AppRedux>,
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
      {
        path: "/leads",
        element: <Leads></Leads>,
      },
      {
        path: "/addlead",
        element: <AddLead></AddLead>,
      },
      {
        path: "/editlead/:id",
        element: <EditLead></EditLead>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
