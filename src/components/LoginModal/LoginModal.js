import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ onClose, handleRegisterModal, onSubmit }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm title="Log In" onClose={onClose} onSubmit={handleSubmit}>
      <label>
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          required
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
      </label>

      <button className="modal__button" type="submit">
        Log In
      </button>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleRegisterModal}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
