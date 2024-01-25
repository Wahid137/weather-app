const InputForm = () => {
  return (
    <form className="flex justify-center">
      <div className="my-10 flex">
        <input
          type="text"
          className=" w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
          placeholder="Enter a location for Weather ..."
        />
        <button className="mr-1. items-center rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white">
          Search
        </button>
      </div>
    </form>
  );
};

export default InputForm;
