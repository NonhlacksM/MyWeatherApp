//change city and temperature
function weather(response) {
  //update city
  let currentCity = document.querySelector(".current-city");
  let newCity = response.data.city;
  currentCity.innerHTML = newCity;
  //update temp
  let currentTemp = document.querySelector(".current-temperature-value");
  let newTemp = Math.round(response.data.temperature.current);
  currentTemp.innerHTML = newTemp;
}
// search API
function searchAPI(city) {
  let apiKey = "33bf642o0ct3714a65adf2fc8fed4e85";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(weather);
}
//search the city from the weather API
function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchAPI(searchInputElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
//change date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
