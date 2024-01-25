import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  if (inputCity) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;
  }

  const {
    data: temperatureDetails = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["temperatureDetails", inputCity],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  //decide what to do
  let content = null;
  if (isLoading) content = <p>Loading...!!!</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && temperatureDetails.length > 0)
    content = jobs
      .filter(filterByStatus)
      .map((job) => <JobListItem key={job.id} job={job} />);

  if (!isLoading && !isError && jobs.length === 0)
    content = <p>No transaction found!</p>;

  // let content;

  // if (temperatureDetails.name) {
  //   content = (
  //     <WeatherInfo temperature={temperatureDetails} refetch={refetch} />
  //   );
  // }

  // if (!temperatureDetails.name) {
  //   content = (
  //     <h1 className="text-white text-lg text-center ">
  //       Not Available This City! Try Another
  //     </h1>
  //   );
  // }

  //search functionality with debounce handler
  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    setInputCity(value);
  };

  const handleSearch = debounceHandler(doSearch, 500);

  return (
    <div className="container bg-slate-300 bg-opacity-10">
      <InputForm handleSearch={handleSearch} />
      {content}
    </div>
  );
}

export default App;
