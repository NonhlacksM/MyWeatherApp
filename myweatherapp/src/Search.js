import React from "react";
import "./Weather.css";
import CurrentDate from "./date";

export default function Search(props) {
  return (
    <div class="row mb-5">
      <div class="col-7">
        <h2 class="current-city fs-1 fw-bold">{props.data.name}</h2>
        <p>
          <CurrentDate />
          {props.data.weather[0].description}
          <br />
          Humidity:{" "}
          <span>
            {" "}
            <strong>{props.data.main.humidity}%</strong>
          </span>{" "}
          <br />
          Wind:
          <span>
            {" "}
            <strong>{props.data.wind.speed}km/h</strong>
          </span>
        </p>
      </div>
      <div class="col text-center px-5 mt-3">
        <h2 class="temp fw-bold ">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(props.data.main.temp)}
          <span class="tempdeg">°C</span>
        </h2>
      </div>
    </div>
  );
}
