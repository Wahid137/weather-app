import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [temperatureDetails, setTemperatureDetails] = useState([]);
  const [inputCity, setInputCity] = useState("paris");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTemperatureDetails(data));
  }, [url, inputCity]);

  console.log(temperatureDetails);

  const handleInput = (city) => {
    setInputCity(city);
  };

  return (
    <div className="container">
      <InputForm onInput={handleInput} />
      <WeatherInfo />
    </div>
  );
}

export default App;
