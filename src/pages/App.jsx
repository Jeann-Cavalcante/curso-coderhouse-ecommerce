import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";

import Details from "./Details";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
