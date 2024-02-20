import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext, useRef } from "react";

const ItemModal = ({ selectedCard, onClose, handleOpenConfirmModal }) => {
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser?._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal__content-card" ref={ref}>
        <button
          className="image__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.imageUrl} />
        <div className="modal__info-wrapper">
          <div className="modal__info">
            <p className="modal__info-name">{selectedCard.name}</p>
            <p className="modal__info-weather">
              Weather type: {selectedCard.weather}
            </p>
          </div>
          <button
            type="text"
            className={itemDeleteButtonClassName}
            onClick={handleOpenConfirmModal}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
