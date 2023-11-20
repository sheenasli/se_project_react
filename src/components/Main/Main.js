import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const getWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        <div>
          Today is {temp + "\u00B0 " + currentTemperatureUnit} / You may want to
          wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
