import DailyData from "./DailyData";

const HourlyForecast = ({ title, dailyForecasts }) => {
  console.log(dailyForecasts.list);
  return (
    <div className="w-3/5 mt-10 mx-auto">
      <div className="flex items-center justify-start mt-6">
        <p className="flex text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {dailyForecasts &&
          dailyForecasts?.list?.slice(0, 8).map((item, i) => <DailyData />)}
      </div>
    </div>
  );
};

export default HourlyForecast;
