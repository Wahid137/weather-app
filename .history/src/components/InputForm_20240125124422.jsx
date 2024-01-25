const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10">
        <input
          type="text"
          className="border "
          placeholder="Enter a location for Weather ..."
        />
        <button className="btn btn-primary bg-primary">Search</button>
      </div>
    </form>
  );
};

export default InputForm;
