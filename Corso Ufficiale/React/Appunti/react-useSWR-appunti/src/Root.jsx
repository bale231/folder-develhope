import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import GithubUsers from "./components/GithubUsers";
import App from "./App";

function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<GithubUsers />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
