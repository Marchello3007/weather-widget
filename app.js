let userCity = prompt("Введіть ваше місто");
// let cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
// console.log(userCity);
// console.log(cityUrl);

const theWeather = document.querySelector("#weather");

function showWeather() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((res) => res.json())
    .then((data) => {
      let name = data.name;
      let temp = Math.round(data.main.temp);
      let pressure = data.main.pressure;
      let description = data.weather[0].description;
      let icon = data.weather[0].icon;
      let humidity = data.main.humidity;
      let speed = data.wind.speed;
      let deg = data.wind.deg;

      // console.log(name);
      // console.log(temp);
      // console.log(pressure);
      // console.log(description);
      // console.log(icon);
      // console.log(humidity);
      // console.log(speed);
      // console.log(deg);
      // console.log(data);

      const template = `<div class="location">Місто   ${name}</div>
          <div class="temp">Температура повітря:  ${temp} C.</div>
          <div class="pressure">Атмосферний тиск:  ${pressure} мм.</div>
          <div class="description">Погода:  ${description} </div>
          <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather">
          <div class="humidity">Відносна вологість повітря:  ${humidity} %</div>
          <div class="speed">Швидкість вітру:  ${speed} м/с</div>
          <div class="deg">Напрям вітру:  ${deg} град.</div>`;

      theWeather.innerHTML = template;
    });
}

showWeather();
