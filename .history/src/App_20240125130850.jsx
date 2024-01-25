import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [temperatureDetails, setTemperatureDetails] = useState([]);
  return (
    <div className="container">
      <InputForm />
      <WeatherInfo />
    </div>
  );
}

export default App;
