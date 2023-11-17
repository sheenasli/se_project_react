import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOutsideClick}>
      <div className="modal__content" ref={ref}>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button className="modal__button" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
