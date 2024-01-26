const HourlyForecast = ({ title }) => {
  return (
    <div className="w-3/5 mt-10 mx-auto">
      <div className="flex items-center justify-start mt-6">
        <p className="flex text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {content}
      </div>
    </div>
  );
};

export default HourlyForecast;
