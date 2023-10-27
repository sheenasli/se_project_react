import { useEffect, useRef } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  buttonText = "Add garment",
  onClose,
  name,
}) => {
  // start
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  // end
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content" ref={ref}>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form>
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
