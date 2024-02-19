import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import {
  baseUrl,
  getItems,
  addItems,
  deleteItems,
  updateProfile,
} from "../../utils/api";
import { processServerResponse } from "../../utils/utils";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import * as api from "../../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const weatherTemp = "70° F";

  //States
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [weatherId, setWeatherId] = useState(null);

  //Handling active modals
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("registerModal");
  };

  const handleLoginModal = () => {
    setActiveModal("loginModal");
  };

  const handleEditProfileModal = () => {
    setActiveModal("profileModal");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    addItems({ name, imageUrl, weather })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleOpenConfirmModal = () => {
    setActiveModal("delete");
  };

  const handleCloseConfirmModal = () => {
    setActiveModal("");
  };

  //Callback function to delete item
  const handleDeleteItem = () => {
    console.log(selectedCard._id);
    setDeleteCard(true);
    deleteItems(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });

        setClothingItems(filteredCards);
        handleCloseModal();
        handleCloseConfirmModal();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDeleteCard(false);
      });
  };

  //Callback function to register new user
  function handleRegistration({ email, password, name, avatar }) {
    auth
      .registration(email, password, name, avatar)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
        handleLoginModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //Callback function to log in user
  function handleLogin({ email, password }) {
    auth
      .authorization(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth.checkToken(res.token).then((data) => {
            setCurrentUser(data.data);
            setIsLoggedIn(true);
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Login failed", err);
        throw err;
      });
  }

  //Callback function to edit profile
  const handleEditProfile = ({ name, avatar }) => {
    console.log(name, avatar);
    updateProfile(name, avatar)
      .then(({ data }) => {
        setCurrentUser(data);
        handleCloseModal();
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Checking for token
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      auth.checkToken(jwt).then((res) => {
        if (res && res.data) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        }
      });
    }
  }, []);

  //Set clothing item according to weather type
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        console.log("weatherdata", data);
        const weatherData = parseWeatherData(data);
        console.log("parsedweather", weatherData);
        const currentWeatherId = data.weather[0].id;

        console.log("currentWeatherId", currentWeatherId);
        setTemp(weatherData);
        setWeatherId(currentWeatherId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((cards) => {
        setClothingItems(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  //Callback to like a card
  const handleCardLike = (id, isLiked) => {
    !isLiked
      ? api
          .addCardLike(id)
          .then(({ data }) => {
            console.log(clothingItems, data);
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? data : c))
            );
            // setIsLiked(true);
          })

          .catch((error) => {
            console.log(error);
          })
      : api
          .removeCardLike(id)
          .then(({ data }) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? data : c))
            );
            // setIsLiked(false);
          })
          .catch((error) => {
            console.log(error);
          });
  };

  //callback for logging a user out
  const history = useHistory("");
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            weatherData={temp}
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
            onSelectCard={handleSelectedCard}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
                weatherId={weatherId}
              />
            </Route>

            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                handleEditProfileModal={handleEditProfileModal}
                isLoggedIn={isLoggedIn}
                onCardLike={handleCardLike}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />

          {activeModal === "profileModal" && (
            <EditProfileModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              onSubmit={handleEditProfile}
            />
          )}

          {activeModal === "registerModal" && (
            <RegisterModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              handleLoginModal={handleLoginModal}
              handleCreateModal={handleCreateModal}
              onSubmit={handleRegistration}
            />
          )}
          {activeModal === "loginModal" && (
            <LoginModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              handleRegisterModal={handleRegisterModal}
              onSubmit={handleLogin}
            />
          )}
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleOpenConfirmModal}
              handleOpenConfirmModal={handleOpenConfirmModal}
            />
          )}
          {activeModal === "delete" && (
            <DeleteConfirmModal
              handleDeleteItem={handleDeleteItem}
              handleCloseConfirmModal={handleCloseConfirmModal}
              selectedCard={selectedCard}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
