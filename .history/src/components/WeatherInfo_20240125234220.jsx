const WeatherInfo = ({ temperature, refetch }) => {
  refetch();
  return (
    <div className=" text-white text-center ">
      <div>
        <div>
          <p>Tuesday, 31 May 2023 | Local time: 12: 46</p>
        </div>
      </div>
      <img
        className="mx-auto"
        src="https://openweathermap.org/img/wn/02d@2x.png"
        alt="weather-icon"
      />
      <h1 className="text-lg">{temperature?.name}</h1>
      <h3>
        <span className="text-lg">{temperature?.main?.temp}</span>&deg;C
      </h3>
      {/* <h1 className="text-lg">{temperature?.weather[0].main}</h1> */}
      <h1 className="text-lg">wind {temperature?.wind?.speed}</h1>
    </div>
  );
};

export default WeatherInfo;
