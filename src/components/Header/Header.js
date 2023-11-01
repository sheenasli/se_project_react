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
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <div>
          <img
            className="header__logo"
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
        <div className="header__username">{username}</div>
        <div>
          <img
            className="header__avatar-logo"
            src={require("../../images/Avatar.svg").default}
            alt="Avatar Logo"
          />
        </div>
      </div>

      <div
        className={`navigation-container ${
          isMobileMenuOpened ? "mobile-menu-opened" : ""
        }`}
      >
        <button onClick={toggleMobileMenu} className="menu-button">
          {isMobileMenuOpened ? (
            <img
              className="mobile__close-button"
              src={require("../../images/Mobile Menu Close Button.svg").default}
              alt="Close"
            />
          ) : (
            <img
              className="mobile__nav-button"
              src={require("../../images/Mobile Nav Button.svg").default}
              alt="Menu"
            />
          )}
        </button>
        {isMobileMenuOpened && (
          <div className="mobile__menu">
            <div>
              <div className="mobile__avatar-container">
                <div>{username}</div>
                <img
                  className="mobile__avatar-logo"
                  src={require("../../images/Avatar.svg").default}
                  alt="Avatar Logo"
                />
              </div>
              <button
                className="mobile__header__button"
                type="text"
                onClick={onCreateModal}
              >
                + Add Clothes
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
