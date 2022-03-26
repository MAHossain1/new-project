import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Equip.css";

const Equip = props => {
  const { name, picture, price } = props.equip;
  return (
    <div className="equip">
      <img src={picture} alt="" />
      <h2>{name} </h2>
      <h4>${price} </h4>
      <div>
        <button className="btn-cart">
          <p>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Equip;
