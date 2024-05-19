import React, { useState, useEffect } from "react";
import axios from "axios";
import MoreInfo from "./MoreInfo";
import Search from "./Search";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    setWeatherData(response.data);
  }

  function searchCity() {
    let apiKey = "33bf642o0ct3714a65adf2fc8fed4e85";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showData);
  }
  useEffect(() => {
    searchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  return (
    <div className="container">
      <div className="containerWeather shadow rounded-3 p-3">
        <h1 className="ms-1 mb-4 fw-bold">🌥️ Daily weather</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control w-100 ms-1"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 fw-bold "
              />
            </div>
          </div>
        </form>
        <hr className="mt-4" />

        {weatherData && <Search data={weatherData} />}
        <Forecast city={city} />
        <hr className="mt-4" />
        <MoreInfo />
      </div>
    </div>
  );
}
