import React from "react";
import CurrentDate from "./CurrentDate";

export default function Search(props) {
  return (
    <div className="row mb-5">
      <div className="col-7">
        <h2 className="fs-1 fw-bold">{props.data.city}</h2>
        <CurrentDate />
        <p>
          {props.data.condition.description}
          <br />
          Humidity:{" "}
          <span>
            {" "}
            <strong>{props.data.temperature.humidity}%</strong>
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
          <img src={props.data.condition.icon_url} alt="weather icon" />
          {Math.round(props.data.temperature.current)}
          <span className="tempdeg">°C</span>
        </h2>
      </div>
    </div>
  );
}
