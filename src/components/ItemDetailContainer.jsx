import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const firstProduct = response.data.products[0];

      const itemData = {
        title: firstProduct.title,
        description: firstProduct.description,
        image: firstProduct.images[0],
        price: firstProduct.price,
      };

      setItem(itemData);
    });
  }, []);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Carregando detalhes do item...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
