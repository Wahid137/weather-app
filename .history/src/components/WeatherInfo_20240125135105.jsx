import React from 'react';

const WeatherInfo = () => {
    return (
        <div class="weather-status text-white text-center">
            <img id='weather-icon' src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 id="city">Dhaka</h1>
            <h3><span id="temperature">38.06</span>&deg;C</h3>
            <h1 id='condition' class="lead">Clouds</h1>
        </div>
    );
};

export default WeatherInfo;