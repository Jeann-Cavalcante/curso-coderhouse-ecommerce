import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import Item from "./item";

const ItemListContainer = () => {
  const [count, setCount] = useState(1);


  return (
    <div>
      <Item />
    </div>
  );
}

export default ItemListContainer;