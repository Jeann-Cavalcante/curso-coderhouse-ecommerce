const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default Item;
