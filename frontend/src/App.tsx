import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Watchlist from "./pages/Watchlist";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

function App() {
  const location = useLocation();
  return (
    <main>
      {location.pathname === "/terms-and-conditions" ||
      location.pathname === "/privacy-policy" ? (
        <></>
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </main>
  );
}

export default App;
