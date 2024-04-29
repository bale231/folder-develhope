import { useEffect, useState } from "react";

export function useOpenWeatherMap(input) {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8c679d9817401dbf31cb36b41cf5bec2&units=metric`
      );
      const json = await response.json();
      setData([...data, json]);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [input]);

  return {
    fetchData,
    data,
  };
}
