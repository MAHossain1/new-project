import React, { useEffect, useState } from "react";
import Equip from "../Equip/Equip";
import "./Shop.css";

const Shop = () => {
  const [equips, setEquips] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setEquips(data));
  }, []);

  return (
    <div className="main-container">
      <div className="equip-container">
        {equips.map(equip => (
          <Equip key={equip.id} equip={equip}></Equip>
        ))}
      </div>
      <div className="equip-choose">
        <h2>this is cart container</h2>
      </div>
    </div>
  );
};

export default Shop;
