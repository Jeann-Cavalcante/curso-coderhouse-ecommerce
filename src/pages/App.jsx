import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex justify-center items-center">
      <ItemListContainer title="Produtos" qtd="2" />

      </div>
    </div>
  );
}

export default App;
