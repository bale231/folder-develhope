import React from "react";
import { Link } from "react-router-dom";
import useGithubUser from "../hooks/useGithubUser";

function GithubUsers() {
  const { users, error, isLoading, onFetchUser } = useGithubUser();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <h1>404, page not found</h1>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
      <button>
        <Link to="/">Back to home</Link>
      </button>
    </>
  );
}

export default GithubUsers;
