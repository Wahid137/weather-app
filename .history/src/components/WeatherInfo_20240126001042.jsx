import { UilTear, UilTemperature, UilWind } from "@iconscout/react-unicons";

const WeatherInfo = ({ temperature, refetch }) => {
  refetch();
  return (
    <div className=" text-white text-center ">
      <div>
        <div className="flex flex-center justify-center my-6">
          <p className="text-white text-xl font-extraLight">
            Tuesday, 31 May 2023 | Local time: 12:46 PM
          </p>
        </div>
        <div className="flex flex-center justify-center my-6">
          <p className="text-white text-xl font-medium">Berlin, DE</p>
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
    </div>
  );
};

export default WeatherInfo;
