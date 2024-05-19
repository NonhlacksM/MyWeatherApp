import React from "react";
import "./Weather.css";
import CurrentDate from "./date";

export default function Search(props) {
  return (
    <div className="row mb-5">
      <div className="col-7">
        <h2 className="current-city fs-1 fw-bold">{props.data.name}</h2>
        <CurrentDate />
        <p>
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
      <div className="col text-center px-5 mt-3">
        <h2 className="temp fw-bold ">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt=""
          />
          {Math.round(props.data.main.temp)}
          <span className="tempdeg">°C</span>
        </h2>
      </div>
    </div>
  );
}
