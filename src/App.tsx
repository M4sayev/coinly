import { Route, Routes } from "react-router-dom";
import "./App.css";
import Watchlist from "./pages/Watchlist";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </main>
  );
}

export default App;
