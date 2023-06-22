import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Produtos" />
    </div>
  );
}

export default App;
