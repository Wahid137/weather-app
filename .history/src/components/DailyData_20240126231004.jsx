const DailyData = () => {
  return (
    <div className="flex flex-col items-center justify-between text-white">
      <p>{moment.unix(item?.dt).format("dddd")}</p>
      <img
        className="w-12 my-1"
        src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
        alt="weather-icon"
      />
      <p className="font-medium">{item?.main?.temp} °C</p>
    </div>
  );
};

export default DailyData;
