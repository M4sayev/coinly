import Header from "../components/Home/Header/Header";
import CoinListPanel from "../components/Home/CoinListPanel/CoinListPanel";

function Home() {
  return (
    <div className="bg-[image:var(--gradient-bg)]">
      <Header />
      <CoinListPanel />
    </div>
  );
}

export default Home;
