import { parseWeatherData } from "../util/weatherApi";
import "./Header.css";

const Header = ({ weatherData, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";
  const avatar = "";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            src={require("../../images/HeaderLogo.svg").default}
            alt="Header Logo"
          />
        </div>
        <div>
          {currentDate}, {weatherData.city}
        </div>
      </div>
      <div className="header__nav">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div>{username}</div>
        <div>
          <img
            className="header__avatar-logo"
            src={require("../../images/Avatar.svg").default}
            alt="Avatar Logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
