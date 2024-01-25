import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;
  if (inputCity) {
    const { data: temperatureDetails } = useQuery({
      queryKey: ["temperatureDetails"],
      queryFn: () => fetch(url).then((res) => res.json()),
    });
  }

  console.log(temperatureDetails);

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
    setInputCity(value);
  };

  const handleSearch = debounceHandler(doSearch, 1000);

  return (
    <div className="container">
      <InputForm handleSearch={handleSearch} />
      <WeatherInfo temperature={temperatureDetails} />
    </div>
  );
}

export default App;
