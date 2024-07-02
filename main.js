const currentDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Elements
const currentTimeElem = document.getElementById("utc-time");
const currentDayElem = document.getElementById("current-day");

// Update time values
currentTimeElem.textContent = currentDate.toUTCString();
currentDayElem.textContent = days[currentDate.getDay()];