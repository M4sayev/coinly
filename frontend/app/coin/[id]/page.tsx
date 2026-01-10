async function Coin({ params }: { params: Promise<{ id: string }> }) {
  const coinId = (await params).id;
  return (
    <main className="min-h-screen bg-(image:--gradient-secondary) pt-15 px-5">
      <div className="max-7xl mx-auto py-10 max-w-6xl">
        <div className="h-20 bg-secondary-900 rounded-lg mb-5 text-neutral-100">
          {coinId}
        </div>
        <div className="h-20 w-[70%] bg-secondary-900 rounded-lg"></div>
        <div className="w-1/2 h-1/2 bg-color-secondary-900 rounded-lg"></div>
      </div>
    </main>
  );
}

export default Coin;
