const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10">
        <input
          type="text"
          className="w-full bg-white px-4 py-2.5 rounded-md"
          placeholder="Enter a location for Weather ..."
        />
        <button className="btn btn-primary bg-primary">Search</button>
      </div>
    </form>
  );
};

export default InputForm;
