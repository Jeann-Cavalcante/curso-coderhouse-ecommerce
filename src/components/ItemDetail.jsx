import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ item }) {
  const [addedQuantity, setAddedQuantity] = useState(null);
  const [count, setCount] = useState(1);

  const handleAddToCart = (quantityToAdd) => {
    setAddedQuantity(quantityToAdd);
  };

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Preço: R${item.price}</p>
      <ItemCount count={count} initialQuantity={1} onAdd={handleAddToCart} />
      <button onClick={() => (window.location.href = "/cart")}>
        Finalizar Compra
      </button>
    </div>
  );
}

export default ItemDetail;
