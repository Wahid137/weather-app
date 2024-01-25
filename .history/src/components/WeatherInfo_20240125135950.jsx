const WeatherInfo = ({ temperature }) => {
  console.log("weather", temperature);
  return (
    <div className="flex text-white justify-center h-96">
      <img
        src="https://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      />
      <h1 className="text-lg">Dhaka</h1>
      <h3>
        <span className="text-lg">38.06</span>&deg;C
      </h3>
      <h1 className="text-lg">Clouds</h1>
    </div>
  );
};

export default WeatherInfo;
