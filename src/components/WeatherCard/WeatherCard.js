import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/Day/Sunny Day.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/Day/Cloudy Day.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/Day/Foggy Day.svg").default,
    day: true,
    type: "foggy",
  },
  {
    url: require("../../images/Day/Rainy Day.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../../images/Day/Snowy Day.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../../images/Day/Stormy Day.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../../images/Night/Clear Night.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../../images/Night/Cloudy Night.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/Night/Foggy Night.svg").default,
    day: false,
    type: "foggy",
  },
  {
    url: require("../../images/Night/Rainy Night.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../../images/Night/Snowy Night.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../../images/Night/Stormy Night.svg").default,
    day: false,
    type: "stormy",
  },
];

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}&deg; F</div>
      <img src={imageSrcUrl} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
