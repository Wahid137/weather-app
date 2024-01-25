const WeatherInfo = () => {
  return (
    <div className="text-white text-center">
      <img
        className="flex text-center"
        src="https://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      />
      <h1 id="city">Dhaka</h1>
      <h3>
        <span id="temperature">38.06</span>&deg;C
      </h3>
      <h1 id="condition" className="lead">
        Clouds
      </h1>
    </div>
  );
};

export default WeatherInfo;
