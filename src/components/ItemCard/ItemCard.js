import React from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useContext } from "react";
import likeButton from "../../images/likeButton.svg";
import likeButtonActive from "../../images/likeButtonActive.svg";

const ItemCard = ({ item, onSelectCard, isLoggedIn, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  return (
    <div className="card">
      {isLoggedIn ? (
        <button
          onClick={() => onCardLike(item._id, isLiked)}
          className="card__like"
        >
          <img
            src={isLiked ? likeButtonActive : likeButton}
            alt="like button"
            className="cards__like"
          />
        </button>
      ) : (
        ""
      )}

      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name"> {item.name} </div>
    </div>
  );
};

export default ItemCard;

//click handler handleLike()
//call onCardLike() inside function, pass item argument same way as handleClick()
