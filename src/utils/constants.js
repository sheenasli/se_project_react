export const latitude = "37.8651";
export const longitude = "-119.5383";
export const APIkey = "9cb7252ae344f0c912bc3a87b41931ec";

export const weatherOptions = [
  {
    url: require("../images/Day/Sunny Day.svg").default,
    isDay: true,
    type: "clear",
  },
  {
    url: require("../images/Day/Cloudy Day.svg").default,
    isDay: true,
    type: "cloudy",
  },
  {
    url: require("../images/Day/Foggy Day.svg").default,
    isDay: true,
    type: "foggy",
  },
  {
    url: require("../images/Day/Rainy Day.svg").default,
    isDay: true,
    type: "rainy",
  },
  {
    url: require("../images/Day/Snowy Day.svg").default,
    isDay: true,
    type: "snowy",
  },
  {
    url: require("../images/Day/Stormy Day.svg").default,
    isDay: true,
    type: "stormy",
  },
  {
    url: require("../images/Night/Clear Night.svg").default,
    isDay: false,
    type: "clear",
  },
  {
    url: require("../images/Night/Cloudy Night.svg").default,
    isDay: false,
    type: "cloudy",
  },
  {
    url: require("../images/Night/Foggy Night.svg").default,
    isDay: false,
    type: "foggy",
  },
  {
    url: require("../images/Night/Rainy Night.svg").default,
    isDay: false,
    type: "rainy",
  },
  {
    url: require("../images/Night/Snowy Night.svg").default,
    isDay: false,
    type: "snowy",
  },
  {
    url: require("../images/Night/Stormy Night.svg").default,
    isDay: false,
    type: "stormy",
  },
];

export const currentTime = Date.now();
