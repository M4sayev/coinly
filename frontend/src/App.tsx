import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Watchlist from "./pages/Watchlist";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  const isTermsOrPrivacy =
    location.pathname === "/terms-and-conditions" ||
    location.pathname === "/privacy-policy";

  return (
    <>
      {isTermsOrPrivacy ? <></> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
      {isTermsOrPrivacy ? <></> : <Footer />}
    </>
  );
}

export default App;
