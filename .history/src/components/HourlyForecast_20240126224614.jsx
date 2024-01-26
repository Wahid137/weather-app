const HourlyForecast = ({ title, dailyForecasts }) => {
  return (
    <div className="w-3/5 mt-10 mx-auto">
      <div className="flex items-center justify-start mt-6">
        <p className="flex text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {dailyForecasts &&
          dailyForecasts?.map((item, i) => {
            <div key={item.i}>
              <div className="flex flex-col items-center justify-between text-white">
                <p>6:30 </p>
                <img
                  className="w-12 my-1"
                  src={`https://openweathermap.org/img/wn/10d@2x.png`}
                  alt="weather-icon"
                />
                <p className="font-medium">28 °C</p>
              </div>
            </div>;
          })}
      </div>
    </div>
  );
};

export default HourlyForecast;
