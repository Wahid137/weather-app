const HourlyForecast = ({ title, dailyForecasts }) => {
  console.log("Ho", dailyForecasts.daily);
  return (
    <div className="w-3/5 mt-10 mx-auto">
      <div className="flex items-center justify-start mt-6">
        <p className="flex text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {dailyForecasts &&
          dailyForecasts?.daily?.map((item) => (
            <div
              key={item.lat}
              className="flex flex-col items-center justify-between text-white"
            >
              <p>4:30 AM</p>
              <img
                className="w-12 my-1"
                src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                alt="weather-icon"
              />
              <p className="font-medium">{item?.feels_like?.day}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
