const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10">
        <input
          type="text"
          className="border "
          placeholder="Enter a location for Weather ..."
        />
        <button type="button" className="">
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
