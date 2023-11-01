import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp.temperature >= 86) {
      return "hot";
    } else if (weatherTemp.temperature >= 66 && weatherTemp.temperature <= 85) {
      return "warm";
    } else if (weatherTemp.temperature <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="cloudy"
        weatherTemp={weatherTemp.temperature}
      />
      <section className="card__section" id="card-section">
        <div>
          Today is {weatherTemp.temperature}&deg; F / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
