import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const [count, setCount] = useState(1);

  function onAdd () {
    const stock = 5;

    if (count > stock) {
      return alert("Estoque indisponível");
    }
    return alert("Produto adicionado ao carrinho");
  }

  function addItem () {
    setCount(count + 1);
  }

  function removeItem () {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count <= 0) {
      setCount(1);
    }
  }, [count]);

  return (
    <div>
      <ItemCount onAdd={onAdd} addItem={addItem} removeItem={removeItem} count={count} />
    </div>
  );
}

export default ItemListContainer;