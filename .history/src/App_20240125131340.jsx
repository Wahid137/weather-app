import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [temperatureDetails, setTemperatureDetails] = useState([]);
  const [city, setCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTemperatureDetails(data));
  }, [url]);

  console.log(temperatureDetails);
  return (
    <div className="container">
      <InputForm />
      <WeatherInfo />
    </div>
  );
}

export default App;
