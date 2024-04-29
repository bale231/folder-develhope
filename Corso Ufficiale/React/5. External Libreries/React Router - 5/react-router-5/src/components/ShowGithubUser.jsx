import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ShowGithubUser() {
  const { username } = useParams();
  const [user, setUser] = useState("");

  async function fetchUsers() {
    try {
      const fetchURL = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await fetchURL.json();
      if (!jsonData) {
        return <h1>Loading...</h1>;
      } else {
        setUser(jsonData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [username]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Text>{user.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ShowGithubUser;
