const InputForm = () => {
  return (
    <form className="">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form"
          placeholder="Enter a location for Weather ..."
        />
        <div className="">
          <button type="button" className="btn btn-danger">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
