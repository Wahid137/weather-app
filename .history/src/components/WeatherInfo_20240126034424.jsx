import {
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import TimeFormate from "../utils/TimeFormate";
import HourlyForecast from "./HourlyForecast";

const WeatherInfo = ({ temperature, refetch }) => {
  refetch();
  return (
    <div className=" text-white text-center ">
      <div>
        <div className="flex flex-center justify-center my-3">
          <p className="text-white text-xl font-medium">
            {temperature?.name}, {temperature?.sys?.country}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center py-4 lg: justify-around w-1/2 mx-auto my-7 bg-slate-600 bg-opacity-65 rounded">
        <img
          className="w-20"
          src={`https://openweathermap.org/img/wn/${temperature?.weather[0]?.icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="text-5xl">{temperature?.main?.temp} °C</p>
        <div>
          <div className="flex font-light text-xm items-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel
            <span className="font-medium ml-1">
              {temperature?.main?.feels_like} °C
            </span>
          </div>
          <div className="flex font-light text-xm items-center">
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className="font-medium ml-1">
              {temperature?.main?.humidity}%
            </span>
          </div>
          <div className="flex font-light text-xm items-center">
            <UilWind size={18} className="mr-1" />
            Wind speed
            <span className="font-medium ml-1">
              {temperature?.wind?.speed} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun className="text-orange-300 " />
        <p className="font-light size-10">
          Rise:{" "}
          <span className="font-medium ml-1">
            {TimeFormate(temperature?.sys?.sunrise)} AM
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset className="text-red-400" />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {TimeFormate(temperature?.sys?.sunset)} PM
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="text-yellow-400" />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {temperature?.main?.temp_max} °C
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="text-blue-300" />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {temperature?.main?.temp_min} °C
          </span>
        </p>
      </div>

      <HourlyForecast title="hourly forecast" />
      <HourlyForecast title="daily forecast" />
    </div>
  );
};

export default WeatherInfo;
