import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleLoginModal, onClose, onSubmit, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
    // if (this.state.password === this.state.confirmPassword) {
    //   let { email, password, name, avatar } = this.state;
    //   auth.register(email, password, name, avatar).then((res) => {
    //     if (res) {
    //       this.setState({ message: "" }, () => {
    //         this.props.history.push("/login");
    //       });
    //     } else {
    //       this.setState({
    //         message: "Something went wrong!",
    //       });
    //     }
    //   });
    // }
  };
  //redirect user after reg form is properly submitted

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Email*
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
        Password*
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
      <label>
        Name*
        <input
          className="modal__input"
          type="name"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        Avatar URL*
        <input
          className="modal__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          required
          onChange={handleAvatarChange}
        />
      </label>
      <button className="modal__button" type="submit">
        Sign Up
      </button>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleLoginModal}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
