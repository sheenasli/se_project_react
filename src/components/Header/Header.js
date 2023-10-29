import { useState } from "react";
import { parseWeatherData } from "../util/weatherApi";
import "./Header.css";

const Header = ({ weatherData, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";
  const avatar = "";
  const [isMobileMenuOpened, setMobileMenuOpened] = useState("false");

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };

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

{
  /* <div className={`navigation-container ${isMobileMenuOpened ? 'mobile-menu-opened' : ''}`}>
<button onClick={toggleMobileMenu} className="menu-button">
  {isMobileMenuOpened ? (
    <img src="../../images/Mobile Close Button.png" alt="Close"/>
  ) : (
    <img src="../../images/Nav Button.svg" alt="Menu" />
  )}
</button>

{isMobileMenuOpened && (
  <div className="header__mobile-nav">
    <nav>
      <logo>
      <date>
      <div>
        <button>
        <name>
        <avatar>
      </div>
    </nav>
  </div>);
} */
}
