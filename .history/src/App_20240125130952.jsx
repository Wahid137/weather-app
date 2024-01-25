import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [temperatureDetails, setTemperatureDetails] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="container">
      <InputForm />
      <WeatherInfo />
    </div>
  );
}

export default App;
