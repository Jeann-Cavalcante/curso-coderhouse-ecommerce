
const ItemCount = ({ onAdd, addItem, removeItem, count }) => {

  return (
    <div className="w-[300px] border mt-10 p-6 ">
      <h1>Camiseta tiger</h1>
      <div className="border flex p-2 justify-between items-center">
        <button className="text-4xl" onClick={removeItem}>
          -
        </button>
        <span>{count}</span>
        <button className="text-2xl" onClick={addItem}>
          +
        </button>
      </div>
      <button
        onClick={onAdd}
        className="bg-primary rounded-md text-white w-full p-2 mt-4"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;