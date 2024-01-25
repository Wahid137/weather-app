const WeatherInfo = ({ temperature }) => {
  console.log("weather", temperature.main.temp);
  return (
    <div className=" text-white text-center ">
      <img
        className="mx-auto"
        src="https://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      />
      <h1 className="text-lg">{temperature.name}</h1>
      <h3>
        <span className="text-lg">38.06</span>&deg;C
      </h3>
      <h1 className="text-lg">Clouds</h1>
    </div>
  );
};

export default WeatherInfo;
