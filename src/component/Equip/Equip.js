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
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Equip;
