import { faRandom } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Equip from "../Equip/Equip";
import "./Shop.css";

const Shop = () => {
  const [equips, setEquips] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setEquips(data));
  }, []);

  const handleAddToCart = equip => {
    const newCart = [...cart, equip];
    if (newCart.length < 5) {
      setCart(newCart);
    }
  };
  const selectSpecialOne = equip => {
    const newCart = [...cart, equip];
    const random = Math.floor(Math.random() * newCart.length);
    const randomEquip = newCart[random];
    alert(randomEquip.name);
  };
  const removeSelect = equip => {
    const newCart = [];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="equip-container">
        {equips.map(equip => (
          <Equip
            key={equip.id}
            equip={equip}
            handleAddToCart={handleAddToCart}
          ></Equip>
        ))}
      </div>
      <div className="equip-choose">
        <h2>Selected item</h2>
        {cart.map(name => (
          <Cart
            name={name}
            key={name.serial}
            // selectSpecialOne={selectSpecialOne}
          ></Cart>
        ))}
        <button onClick={selectSpecialOne} className="cart-btn">
          Select Special ONE
        </button>
        <br />
        <br />
        <button onClick={removeSelect} className="cart-btn">
          Select Again
        </button>
      </div>
    </div>
  );
};

export default Shop;
