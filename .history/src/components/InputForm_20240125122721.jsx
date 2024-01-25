=
const InputForm = () => {
  return (
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
  );
};

export default InputForm;
