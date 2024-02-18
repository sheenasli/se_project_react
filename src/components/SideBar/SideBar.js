import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleEditProfileModal, handleLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar">
        <img
          className="sidebar__avatar-logo"
          src={currentUser?.avatar}
          alt="{currentUser.name}"
        />
        <h3 className="sidebar__username">{currentUser?.name}</h3>
      </div>
      <button className="sidebar__edit" onClick={handleEditProfileModal}>
        Change Profile Data
      </button>
      <button className="sidebar__logout" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
