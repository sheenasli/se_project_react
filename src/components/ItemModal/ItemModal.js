import { useEffect, useRef } from "react";

import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal__content-card" ref={ref}>
        <button
          className="image__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link} />
        <div className="modal__info">
          <p className="modal__info-name">{selectedCard.name}</p>
          <p className="modal__info-weather">
            Weather type: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
