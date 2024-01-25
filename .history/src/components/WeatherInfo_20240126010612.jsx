import {
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import HourlyForecast from "./HourlyForecast";

const WeatherInfo = ({ temperature, refetch }) => {
  refetch();
  return (
    <div className=" text-white text-center ">
      <div>
        <div className="flex flex-center justify-center my-6">
          <p className="text-white text-xl font-extraLight">
            moment().format('MMMM Do YYYY, h:mm:ss a'); Tuesday, 31 May 2023 |
            Local time: 12:46 PM
          </p>
        </div>
        <div className="flex flex-center justify-center my-6">
          <p className="text-white text-xl font-medium">
            {temperature?.name}, {temperature?.sys?.country}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center py-4 lg: justify-around w-1/2 mx-auto my-7 bg-slate-600 bg-opacity-65 rounded">
        <img
          className="w-20"
          src="https://openweathermap.org/img/wn/02d@2x.png"
          alt="weather-icon"
        />
        <p className="text-5xl">34</p>
        <div>
          <div className="flex font-light text-xm items-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell
            <span className="font-medium ml-1">32</span>
          </div>
          <div className="flex font-light text-xm items-center">
            <UilTear size={18} className="mr-1" />
            HUmidity
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-xm items-center">
            <UilWind size={18} className="mr-1" />
            Wind speed
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun className="text-orange-300" />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">07:00 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset className="text-red-400" />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:00 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="text-yellow-400" />
        <p className="font-light">
          High: <span className="font-medium ml-1">07:00 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="text-blue-300" />
        <p className="font-light">
          Low: <span className="font-medium ml-1">07:00 AM</span>
        </p>
      </div>

      <HourlyForecast title="hourly forecast" />
      <HourlyForecast title="daily forecast" />
    </div>
  );
};

export default WeatherInfo;
