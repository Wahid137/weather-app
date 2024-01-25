const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10">
        <input
          type="text"
          className="border "
          placeholder="Enter a location for Weather ..."
        />
        <button type="button" className="btn btn-danger">
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
