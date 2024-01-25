function App() {
  return (
    <div class="container">
        <form class="col-md-6 m-auto py-5">
            <div class="input-group mb-3">
                <input id="city-name" type="text" class="form-control" placeholder="Enter a location for Weather ...">
                <div class="input-group-append">
                    <button onclick='searchTemperature()'type="button" class="btn btn-danger">Search</button>
                </div>
            </div>
        </form>
        <div class="weather-status text-white text-center">
            <img id='weather-icon' src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 id="city">Dhaka</h1>
            <h3><span id="temperature">38.06</span>&deg;C</h3>
            <h1 id='condition' class="lead">Clouds</h1>
        </div>
    </div>
  );
}

export default App;
