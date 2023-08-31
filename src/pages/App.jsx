import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Cart from "../components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" component={Cart} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
