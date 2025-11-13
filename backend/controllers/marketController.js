const axios = require("axios");

const getCoins = async (req, res) => {
  const { currency } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
        currency || "btc"
      }&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
      {
        headers: { "x-cg-demo-api-key": process.env.CG_API_KEY },
      }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, data: "Failed to fetch market data" });
  }
};

module.exports = { getCoins };
