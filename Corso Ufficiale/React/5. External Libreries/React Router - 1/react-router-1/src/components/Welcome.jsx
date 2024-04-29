import React from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello, {name}</h1>
      <Alert key={"success"} variant={"success"}>
        This is a {name} alert—check it out!
      </Alert>
    </div>
  );
}

export default Welcome;
