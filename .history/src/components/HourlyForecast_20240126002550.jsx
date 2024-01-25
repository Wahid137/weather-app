import React from "react";

const HourlyForecast = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-6">
        <p className="text-white font-medium uppercase">Hourly Forecast</p>
      </div>
      <hr className="my-2" />
      <div>
        <div>
          <p>4:30 AM</p>
          <img
            className="w-12 my-1"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="weather-icon"
          />
          <p className="font-medium">22</p>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
