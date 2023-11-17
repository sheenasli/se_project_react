import { latitude, longitude, APIkey } from "./constants";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
    `).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {
    temperature: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  weather.city = data.name;
  // weather.temperature = Math.ceil(data.main.temp);

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
