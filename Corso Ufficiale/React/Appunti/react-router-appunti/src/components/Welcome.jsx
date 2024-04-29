import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Welcome = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/subscribe");
  }

  return (
    <div>
      <h1>Hello User!!</h1>
      <button onClick={handleLogin}>Enter the app</button>
    </div>
  );
};
