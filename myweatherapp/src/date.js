import React from "react";

export default function CurrentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let weekday = days[now.getDay()];
  let hours = now.getHours();
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <p class="mb-0">
      {weekday} {hours}:{min}
    </p>
  );
}
