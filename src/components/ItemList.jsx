// ItemListContainer.js
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const mockItems = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    pictureUrl: "https://example.com/product1.jpg",
  },
  // ... Add more mock items here
];

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="item-list-container">
      <h2>Product List</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
