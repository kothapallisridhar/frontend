import React from "react";
//import Counter from "./store/Counter";
import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";
import ProductsNew from "./features/products/ProductsNew";
import Recipes from "./features/recipes/Recipes";
//import Todolist from "./store/Todolist";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function AppRedux() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default AppRedux;
