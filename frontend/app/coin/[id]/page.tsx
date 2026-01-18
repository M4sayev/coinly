import CoinClient from "@/components/Coin/Coin";

async function Coin({ params }: { params: Promise<{ id: string }> }) {
  const coinID = (await params).id;

  return (
    <main className="min-h-screen bg-(image:--gradient-secondary) pt-15 px-5">
      <CoinClient coinID={coinID} />
    </main>
  );
}

export default Coin;
