import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";

const EditProfileModal = ({ onClose, isOpen, onSubmit, isLoading }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const handleEditName = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleEditAvatar = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setName(currentUser.name ?? "");
    setAvatar(currentUser.avatar ?? "");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name*
        <input
          className="modal__input"
          type="name"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="New Name"
          value={name}
          onChange={handleEditName}
        />
      </label>
      <label>
        Avatar*
        <input
          className="modal__input"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="NewAvatar URL"
          value={avatar}
          onChange={handleEditAvatar}
        />
      </label>
      <button className="modal__button" type="submit">
        {isLoading ? "Saving..." : "Save changes"}
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
