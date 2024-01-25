const WeatherInfo = ({ temperature }) => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <img src={url} alt="weather-icon" />
      <h1 className="text-lg" id="city">
        {name}
      </h1>
      <h3 className="text-lg">
        <span id="temperature">{main.temp}</span>&deg;C
      </h3>
      <h1 id="condition" className="text-lg">
        {weather[0].main}
      </h1>
    </div>
  );
};

export default WeatherInfo;
