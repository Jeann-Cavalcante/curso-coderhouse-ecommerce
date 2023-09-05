// ItemListContainer.js
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    let data = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc}`);
      data.push(doc.data());
    });
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Product List</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
