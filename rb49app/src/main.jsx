import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProps from "./props/AppProps.jsx";

createRoot(document.getElementById("root")).render(<AppProps />);
