import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ onClose, onAddItem, isOpen, isLoading }) => {
  const { values, handleChange, setValues } = useForm({});
  // const [name, setName] = useState("");
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const [imageUrl, setUrl] = useState("");
  // const handleUrlChange = (e) => {
  //   setUrl(e.target.value);
  // };

  // const [weather, setWeatherType] = useState("");
  // const handleWeatherChange = (e) => {
  //   setWeatherType(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onAddItem({ name, imageUrl, weather });
    onAddItem(values);
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={onClose}
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
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="imageUrl"
          minLength="1"
          maxLength="999"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <p className="modal__label_header">Select the weather type:</p>
      <div className="modal__label_selectors">
        <div>
          <label>
            <input
              type="radio"
              id="hot"
              name="options"
              value="hot"
              onChange={handleChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              id="warm"
              name="options"
              value="warm"
              onChange={handleChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              id="cold"
              name="options"
              value="cold"
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
        <button className="modal__button" type="submit">
          {isLoading ? "Adding..." : "Add garment"}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
