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
import LoadingSR from "@/components/A11y/LoadingSR";
import CoinChartSkeleton from "./CoinChartSkeleton";
import Error from "@/components/UI/Api/Error";
import { TriangleAlert } from "lucide-react";
import { useMemo } from "react";
import { getChartOptions } from "./chartOptions";

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
  const { data, isLoading, isError, error } = useGetOneCoinPriceQuery({
    coinID,
    currency,
  });
  const chartOptions = useMemo(() => getChartOptions(currency), [currency]);

  if (isError)
    return (
      <Error error={error}>
        <div className="flex flex-col items-center py-15 gap-4">
          <TriangleAlert aria-hidden="true" className="w-10 h-10" />
          <span className=" text-lg text-center  max-w-1/2">
            We couldn&apos;t connect to the server. Please check your connection
            and try again.
          </span>
        </div>
      </Error>
    );

  if (!data && !isLoading)
    return (
      <div className="grid place-items-center min-h-75 text-neutral-200">
        <span>Ooops...Data not found</span>
      </div>
    );

  const prices = data?.prices ?? [];

  if (isLoading)
    return (
      <>
        <LoadingSR text="loading the chart" />
        <CoinChartSkeleton />
      </>
    );

  const lineChartData = {
    labels: prices.map((p) => {
      const date = new Date(p[0]);
      const month = date.toLocaleString("default", { month: "short" });
      return `${month} ${date.getDate()}`;
    }),
    datasets: [
      {
        label: "price",
        data: prices.map((p) => p[1]),
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        backgroundColor: ["transparent"],
        borderColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0,
          );
          gradient.addColorStop(0, "#668aff");
          gradient.addColorStop(1, "#00d154");

          return gradient;
        },
      },
    ],
  };

  return <Line options={chartOptions} data={lineChartData} />;
}

export default CoinChart;
