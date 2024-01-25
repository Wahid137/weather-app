import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [temperature, setTemperature] = useState([]);
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

  const { data: temperatureDetails = [], refetch } = useQuery({
    queryKey: ["temperatureDetails"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  let content;

  if (temperatureDetails) {
    content = (
      <WeatherInfo temperature={temperatureDetails} refetch={refetch} />
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
    console.log("ok");
    setInputCity(value);
  };

  const handleSearch = debounceHandler(doSearch, 500);

  return (
    <div className="container">
      <InputForm handleSearch={handleSearch} />
    </div>
  );
}

export default App;
