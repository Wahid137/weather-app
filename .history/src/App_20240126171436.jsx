import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";
import Loader from "./utils/Loader";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

  const {
    data: temperatureDetails = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["temperatureDetails", inputCity],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  const searchWeather = (searchText) => {
    if (searchText === "") {
      return setInputCity("dhaka");
      window.location.reload(true);
    } else {
      setInputCity(searchText);
    }
  };

  //decide what to do
  let content = null;

  if (isLoading) {
    content = <Loader />;
  }

  if (!isLoading && isError) {
    content = (
      <p className="text-red-500 text-center">There was an error occured</p>
    );
  }

  if (!isLoading && !isError && temperatureDetails.base) {
    content = (
      <WeatherInfo temperature={temperatureDetails} refetch={refetch} />
    );
  }

  if (!isLoading && !isError && !temperatureDetails?.base) {
    content = (
      <h1 className="text-white text-lg text-center ">
        Not Available This City! Try Another
      </h1>
    );
  }

  //search functionality with debounce handler
  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    searchWeather(value);
  };

  const handleSearch = debounceHandler(doSearch, 500);

  return (
    <div className="container pb-7">
      <InputForm handleSearch={handleSearch} />
      {content}
    </div>
  );
}

export default App;
