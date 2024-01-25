import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [inputCity, setInputCity] = useState("dhaka");
  const API_KEY = `fbcfa34964a764bbc4cf1f81102e469f`;

  var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

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
  if (isLoading) {
    console.log("Loading");
    content = <p>No result found!</p>;
  }

  if (!isLoading && isError) {
    console.log("error");
    content = <p className="error">There was an error occured</p>;
  }

  if (!isLoading && !isError && temperature.length > 0) {
    console.log("error");
    content = <WeatherInfo temperature={temperature} refetch={refetch} />;
  }

  if (!isLoading && !isError && temperature.length === 0) {
    console.log("zero");
    content = <p>No result found!</p>;
  }

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
