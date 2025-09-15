import React from "react";
import { Navigation } from "./components/Navigation";
import { MyRoutes } from "./components/MyRoutes";

export const AppRoute = () => {
  return (
    <div>
      <Navigation />
      <MyRoutes />
    </div>
  );
};
