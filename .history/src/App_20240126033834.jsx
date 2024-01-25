import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

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
    } else {
      setInputCity(searchText);
    }
  };

  console.log(temperatureDetails);
  //decide what to do
  let content = null;

  if (isLoading) {
    content = <p className="text-white text-lg text-center">Loading</p>;
  }

  if (!isLoading && isError) {
    console.log("error");
    content = <p className="error">There was an error occured</p>;
  }

  if (!isLoading && !isError && temperatureDetails.base) {
    setInputCity("");
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

  const handleSearch = debounceHandler(doSearch, 800);

  return (
    <div className="container bg-slate-300 bg-opacity-10">
      <InputForm value={inputCity} handleSearch={handleSearch} />
      {content}
    </div>
  );
}

export default App;
