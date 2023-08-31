import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {totalItems > 0 && <div>{totalItems}</div>}
      {/* Other icon rendering code */}
    </div>
  );
};

export default CartWidget;
