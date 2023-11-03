export const latitude = "40";
export const longitude = "-74";
export const APIkey = "9cb7252ae344f0c912bc3a87b41931ec";

export const weatherOptions = [
  {
    url: require("../images/Day/Sunny Day.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/Day/Cloudy Day.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/Day/Foggy Day.svg").default,
    day: true,
    type: "foggy",
  },
  {
    url: require("../images/Day/Rainy Day.svg").default,
    day: true,
    type: "rainy",
  },
  {
    url: require("../images/Day/Snowy Day.svg").default,
    day: true,
    type: "snowy",
  },
  {
    url: require("../images/Day/Stormy Day.svg").default,
    day: true,
    type: "stormy",
  },
  {
    url: require("../images/Night/Clear Night.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../images/Night/Cloudy Night.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/Night/Foggy Night.svg").default,
    day: false,
    type: "foggy",
  },
  {
    url: require("../images/Night/Rainy Night.svg").default,
    day: false,
    type: "rainy",
  },
  {
    url: require("../images/Night/Snowy Night.svg").default,
    day: false,
    type: "snowy",
  },
  {
    url: require("../images/Night/Stormy Night.svg").default,
    day: false,
    type: "stormy",
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
