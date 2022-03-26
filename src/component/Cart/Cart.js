import React from "react";

const Cart = props => {
  console.log(props);
  const { name } = props.name;

  return (
    <div>
      <h4>Name: {name}</h4>
    </div>
  );
};

export default Cart;
