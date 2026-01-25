import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetOneCoinPriceQuery } from "@/state/coinsApi";
import { Currency } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function CoinChart({
  coinID,
  currency,
}: {
  coinID: string;
  currency: Currency;
}) {
  const { data, isLoading } = useGetOneCoinPriceQuery({ coinID, currency });
  console.log(data);

  if (!data && !isLoading) return <div>no data</div>;

  const prices = data?.prices ?? [];

  if (isLoading) return <div>loading...</div>;

  const lineChartData = {
    labels: prices.map((p) => p[0]),
    datasets: [
      {
        label: "Price",
        data: prices.map((p) => p[1]),
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 8,
          autoSkip: true,
        },
      },
    },
  };

  return <Line options={options} data={lineChartData} />;
}

export default CoinChart;
