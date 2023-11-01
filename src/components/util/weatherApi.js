import { latitude, longitude, APIkey } from "./constants";

export const getForecastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
    `).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};
  weather.city = data.name;
  weather.temperature = Math.ceil(data.main.temp);
  weather.type = getWeathertype(weather.temperature);
  return weather;
};

const getWeathertype = (weatherTemp) => {
  if (weatherTemp >= 86) {
    return "hot";
  } else if (weatherTemp >= 66 && weatherTemp <= 85) {
    return "warm";
  } else if (weatherTemp <= 65) {
    return "cold";
  }
};

// https://openweathermap.org/current#cityid
// https://www.w3schools.com/html/html5_geolocation.asp
// https://stackoverflow.com/questions/6797569/get-city-name-using-geolocation
