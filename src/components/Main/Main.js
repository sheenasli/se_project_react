import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  getWeatherType,
  getDay,
  getWeatherCondition,
} from "../../utils/weatherApi";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  onCardLike,
  weatherId,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = getWeatherType(temp);
  const isDay = getDay();
  const weatherCondition = getWeatherCondition(weatherId);

  console.log("weatherCondition", weatherCondition);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard type={weatherCondition} weatherTemp={temp} isDay={isDay} />
      <section className="card__section" id="card-section">
        <div>
          Today is {temp + "\u00B0 " + currentTemperatureUnit} / You may want to
          wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
