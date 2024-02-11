import "./SideBar.css";
import avatarImage from "../../images/Avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleEditProfileModal, handleLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar">
        <img
          className="sidebar__avatar-logo"
          src={currentUser?.avatar}
          alt="Profile Image"
        />
        <div className="sidebar__username">{currentUser?.name}</div>
      </div>
      <button className="sidebar__edit" onClick={handleEditProfileModal}>
        Change profile data
      </button>
      <button className="sidebar__logout" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;
