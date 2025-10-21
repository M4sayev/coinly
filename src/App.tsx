import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Coin from "./pages/Coin";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </main>
  );
}

export default App;
