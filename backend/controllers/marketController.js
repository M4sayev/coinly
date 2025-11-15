const axios = require("axios");

const getCoins = async (req, res) => {
  const { currency, search, per_page } = req.query;
  const page = Number(req.query.page) || 1;

  try {
    if (search) {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(
          search
        )}`,
        {
          headers: { "x-cg-demo-api-key": process.env.CG_API_KEY },
        }
      );
      const ids = data.coins.map((coin) => coin.id).join(",");

      if (!ids) return res.status(200).json([]);

      const { data: marketData } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
          currency || "btc"
        }&ids=${ids}&order=market_cap_desc&per_page=45&page=${page}&sparkline=false`,
        {
          headers: { "x-cg-demo-api-key": process.env.CG_API_KEY },
        }
      );

      return res.status(200).json(marketData);
    } else {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
          currency || "btc"
        }&order=market_cap_desc&per_page=45&page=${page}&sparkline=false`,
        {
          headers: { "x-cg-demo-api-key": process.env.CG_API_KEY },
        }
      );
      return res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, data: "Failed to fetch market data" });
  }
};

module.exports = { getCoins };
