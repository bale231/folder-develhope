import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function GithubUserList() {
  useEffect(() => {
    fetchAPI();
  }, []);

  const [dataUser, setDataUser] = useState([]);

  async function fetchAPI() {
    const fetchURL = await fetch(`https://api.github.com/users`);
    const data = await fetchURL.json();
    if (!data) {
      return <h1>Loading...</h1>;
    } else {
      setDataUser(data);
    }
    console.log(data);
  }

  return (
    <div className="list-users">
      <ListGroup>
        {dataUser.map((user, index) => (
          <ListGroup.Item key={index.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default GithubUserList;
