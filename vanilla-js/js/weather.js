const API_KEY = "8a4d9b4faf273b1024f10e9c8d2086ec";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:nth-child(1)");
      const city = document.querySelector("#weather div:nth-child(2)");
      const windSpeed = document.querySelector("#weather div:nth-child(3)");

      city.innerText = `city :` + data.name;
      weather.innerText = `weather :` + data.weather[0].main;
      windSpeed.innerText = `wind speed :` + data.wind.speed;

      console.log(data);
    });
}
function onGeofError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeofError);
weather.style.cssText = " font-size:16px; text-align:center";
