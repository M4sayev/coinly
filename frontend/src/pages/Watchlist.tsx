import { useEffect, useState } from "react";

function Watchlist() {
  const [count, setCount] = useState(0);
  const user = { name: "blabla" };
  useEffect(() => {
    console.log(user.name);
  }, [user]);
  return (
    <main>
      <button className="p-20" onClick={() => setCount(count + 1)}>
        countrt
      </button>
    </main>
  );
}

export default Watchlist;
