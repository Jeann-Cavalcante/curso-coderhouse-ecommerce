import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, total, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Não há itens no carrinho.</p>
          <Link to="/">Voltar para a página inicial</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}x - R$ {item.price * item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: R$ {total}</p>
          <Link to="/checkout">Finalizar minha compra</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
