import "./SideBar.css";
import avatarImage from "../../images/Avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const username = "Terrence Tegegne";
  const avatar = "";
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar-logo"
        src={currentUser?.avatar}
        alt="Profile Image"
      />
      <div className="sidebar__username">{currentUser?.name}</div>
    </div>
  );
};

export default SideBar;
