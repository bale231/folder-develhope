import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Welcome to the Woocomerce!! </h1>
      <Link to="/store">Go To Store</Link>
    </>
  );
}

export default Homepage;
