import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [temperatureDetails, setTemperatureDetails] = useState([]);
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTemperatureDetails(data));
  }, [url]);

  console.log(inputCity);
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
      {/* <WeatherInfo /> */}
    </div>
  );
}

export default App;
