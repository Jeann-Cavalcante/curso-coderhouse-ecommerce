const ItemListContainer = ({title, qtd}) => {
  return (
    <div>
      <h1>Produto: {title}</h1>
      <p>Quantidade: {qtd}</p>
    </div>
  );
}

export default ItemListContainer;