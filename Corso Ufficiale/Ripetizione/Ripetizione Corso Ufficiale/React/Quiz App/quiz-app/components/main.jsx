import React from "react";
import "./css/index.css";
import QuizApp from "./QuizApp";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
