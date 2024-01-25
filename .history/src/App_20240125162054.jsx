import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

  const {
    data: temperatureDetails = [],
    refetch,
    isError,
  } = useQuery({
    queryKey: ["temperatureDetails"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  let content;

  if (temperatureDetails) {
    console.log("success");
    content = (
      <WeatherInfo temperature={temperatureDetails} refetch={refetch} />
    );
  }
  if (!temperatureDetails.name) {
    content = "";
    content = (
      <h1 className="text-white text-lg text-center ">
        Not Available This City! Try Another
      </h1>
    );
  }
  if (isError) {
    content = "";
    content = <h1>Not Found This Data!</h1>;
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
      {content}
    </div>
  );
}

export default App;
