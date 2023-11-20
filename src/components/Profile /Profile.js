import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ items, clothingItems, onCreateModal }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div>
        <ClothesSection
          cards={items}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
        />
      </div>
    </div>
  );
};

export default Profile;
