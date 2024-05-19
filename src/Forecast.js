import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast(props) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    function showData(response) {
      setWeatherData(response.data);
    }

    function searchCity() {
      const apiKey = "33bf642o0ct3714a65adf2fc8fed4e85";
      const units = "metric";
      const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(showData);
    }

    searchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container px-3 text-center">
      <div className="row ">
        {weatherData &&
          weatherData.daily.slice(0, 5).map((day, index) => {
            const dayOfWeek = days[index];

            return (
              <div key={index} className="col px-0">
                <p>
                  {dayOfWeek} <br />
                  <img src={day.condition.icon_url} alt="weather icon" />
                  <br />
                  <strong>
                    <span className="pe-2">
                      {Math.round(day.temperature.maximum)}°
                    </span>
                  </strong>
                  <span>{Math.round(day.temperature.minimum)}°</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
