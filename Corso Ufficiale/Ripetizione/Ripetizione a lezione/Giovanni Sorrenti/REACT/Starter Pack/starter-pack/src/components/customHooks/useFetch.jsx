import useSWR from "swr";

function useFetch() {
  const { error, data } = useSWR(`https://fakestoreapi.com/products`);

  return {
    error,
    data,
  };
}

export default useFetch;
