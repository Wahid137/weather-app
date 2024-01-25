const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10 flex">
        <input
          type="text"
          className=" w-full bg-white px-4 py-2.5 focus:outline-none"
          placeholder="Enter a location for Weather ..."
        />
        <button className="items-center bg-[#1C4336] px-4 py-2.5 text-md text-white">
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
