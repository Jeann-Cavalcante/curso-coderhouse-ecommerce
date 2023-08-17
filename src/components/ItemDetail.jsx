function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Preço: R${item.price}</p>
    </div>
  );
}

export default ItemDetail;
