import React, { useState, useEffect } from "react";

export const FetchGitHub = ({ username }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error404, setError] = useState(null);

  async function fetchAPI() {
    setLoading(true);
    setError(null);

    try {
      const fetchURL = await fetch(`https://api.github.com/users/${username}`);
      const dataFetch = await fetchURL.json();
      console.log(dataFetch);
      setData(dataFetch);
    } catch (error) {
      setError(error);
      setData("");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [username]);

  return (
    <div className="card-avatar">
      {error404 && <h1>User is not defined</h1>}
      {loading && <h1>Loading...</h1>}
      {data && <h1>{data.login}</h1>}
      <img src={data.avatar_url} alt="avatar_profile" />
      <p>{data.bio}</p>
    </div>
  );
};
