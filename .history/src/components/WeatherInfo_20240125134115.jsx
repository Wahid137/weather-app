const WeatherInfo = ({ temperatureDetails }) => {
    const {}
  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <img
        src="https://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      />
      <h1 className="text-lg" id="city">
        Dhaka
      </h1>
      <h3 className="text-lg">
        <span id="temperature">38.06</span>&deg;C
      </h3>
      <h1 id="condition" className="text-lg">
        Clouds
      </h1>
    </div>
  );
};

export default WeatherInfo;
