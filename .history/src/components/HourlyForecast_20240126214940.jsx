import moment from "moment";

const HourlyForecast = ({ title, dailyForecasts }) => {
  let content;
  if (dailyForecasts) {
    content = dailyForecasts?.daily?.map((item) => (
      <div
        key={item?.dt}
        className="flex flex-col items-center justify-between text-white"
      >
        <p>{moment.unix(item?.dt).format("dddd")}</p>
        <img
          className="w-12 my-1"
          src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="font-medium">{item?.feels_like?.day} °C</p>
      </div>
    ));
  } else {
    content = (
      <div>
        <div className="flex flex-col items-center justify-between text-white">
          <p>{moment.unix(item?.dt).format("dddd")}</p>
          <img
            className="w-12 my-1"
            src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
            alt="weather-icon"
          />
          <p className="font-medium">{item?.feels_like?.day} °C</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-3/5 mt-10 mx-auto">
      <div className="flex items-center justify-start mt-6">
        <p className="flex text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {dailyForecasts ? (
          {}
        ) : (
          <div
            key={item?.dt}
            className="flex flex-col items-center justify-between text-white"
          >
            <p>{moment.unix(item?.dt).format("dddd")}</p>
            <img
              className="w-12 my-1"
              src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
              alt="weather-icon"
            />
            <p className="font-medium">{item?.feels_like?.day} °C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
