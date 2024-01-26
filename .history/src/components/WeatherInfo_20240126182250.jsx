import {
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import { useQuery } from "@tanstack/react-query";
import TimeFormate from "../utils/TimeFormate";
import HourlyForecast from "./HourlyForecast";
import Location from "./Location";

const WeatherInfo = ({ temperature, refetch }) => {
  const API_KEY_DAILY = import.meta.env.VITE_API_KEY_DAILY;
  refetch();
  const lon = temperature.coord.lon;
  const lat = temperature.coord.lat;

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY_DAILY}&units=metric`;

  const { data: dailyForecasts = [] } = useQuery({
    queryKey: ["temperatureDetails", lon],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return (
    <div className=" text-white text-center mt-3">
      <div>
        <div className="flex flex-col items-center">
          <div className="mb-5">
            <p className="text-white text-xl font-medium">
              {temperature?.name}, {temperature?.sys?.country}
            </p>
          </div>
          <div className="w-2/3 lg:w-1/4 mx-auto mb-3">
            <Location lat={lat} lon={lon} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center py-4 lg: justify-around w-1/2 mx-auto my- bg-slate-600 bg-opacity-30 rounded">
        <img
          className="w-20"
          src={`https://openweathermap.org/img/wn/${temperature?.weather[0]?.icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="text-5xl mb-3">{temperature?.main?.temp} °C</p>
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

      <div className="flex flex-col lg:flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun className="text-orange-300 " />
        <p className="font-light">
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

      <HourlyForecast title="daily forecast" dailyForecasts={dailyForecasts} />
    </div>
  );
};

export default WeatherInfo;
