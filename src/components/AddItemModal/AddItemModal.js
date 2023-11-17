import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeatherType] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  //useEffect

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="99"
          placeholder="Image URL"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <p className="modal__label_header">Select the weather type:</p>
      <div className="modal__label_selectors">
        <div>
          <input
            type="radio"
            id="hot"
            name="options"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            name="options"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            name="options"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;