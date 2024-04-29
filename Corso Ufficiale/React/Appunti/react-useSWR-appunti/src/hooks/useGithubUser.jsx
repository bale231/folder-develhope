import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser() {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );

  function fetchGithubUser() {
    mutate();
  }

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onFetchUser: fetchGithubUser(),
  };
}

export default useGithubUser;
