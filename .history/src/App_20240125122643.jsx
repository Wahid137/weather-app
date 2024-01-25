function App() {
  return (
    <div className="container">
      <form className="col-md-6 m-auto py-5">
        <div className="input-group mb-3">
          <input
            id="city-name"
            type="text"
            className="form-control"
            placeholder="Enter a location for Weather ..."
          />
          <div className="input-group-append">
            <button
              onClick="searchTemperature()"
              type="button"
              className="btn btn-danger"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="weather-status text-white text-center">
        <img
          id="weather-icon"
          src="https://openweathermap.org/img/wn/02d@2x.png"
          alt=""
        />
        <h1 id="city">Dhaka</h1>
        <h3>
          <span id="temperature">38.06</span>&deg;C
        </h3>
        <h1 id="condition" className="lead">
          Clouds
        </h1>
      </div>
    </div>
  );
}

export default App;
