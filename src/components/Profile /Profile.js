import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  handleEditProfileModal,
  onCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar handleEditProfileModal={handleEditProfileModal} />
      </div>
      <div>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};

export default Profile;
