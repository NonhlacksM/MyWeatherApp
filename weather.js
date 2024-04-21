//change city and temperature
function weather(response) {
  //update city
  console.log(response.data);
  let currentCity = document.querySelector(".current-city");
  let newCity = response.data.city;
  currentCity.innerHTML = newCity;
  //update temp
  let currentTemp = document.querySelector(".current-temperature-value");
  let currentIcon = document.querySelector(".current-temperature-icon");
  let newTemp = Math.round(response.data.temperature.current);
  let newIcon = `<img src="${response.data.condition.icon_url}" class ="icon"/>`;
  currentTemp.innerHTML = newTemp;
  currentIcon.innerHTML = newIcon;
  //update wind
  let currentWind = document.querySelector(".current-wind");
  let newWind = response.data.wind.speed;
  currentWind.innerHTML = `${newWind}km/h`;
  // update humidity
  let currentHumidity = document.querySelector(".current-humidity");
  let newHumidity = Math.round(response.data.temperature.humidity);
  currentHumidity.innerHTML = `${newHumidity}%`;
  //update condition
  let currentDescription = document.querySelector(".current-description");
  let newDescription = response.data.condition.description;
  currentDescription.innerHTML = `, ${newDescription}`;
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
  searchAPI(searchInputElement.value.trim());
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
searchAPI("jhb");
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
