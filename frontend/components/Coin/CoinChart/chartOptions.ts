import { currencyToSign } from "@/constants/currencies";
import { ChartOptions } from "chart.js";
import { Currency } from "@/types/types";

export const getChartOptions = (currency: Currency): ChartOptions<"line"> => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: {
        labelOffset: 30,
        maxTicksLimit: 6,
        autoSkip: true,
      },
      grid: { display: false },
    },
    y: {
      ticks: {
        callback: function (tickValue: number | string) {
          return `${currencyToSign(currency)} ${tickValue}`;
        },
      },
      border: {
        display: false,
        dash: [3, 10],
      },
      grid: {
        tickBorderDash: [5, 5],
        color: "#6c6b6b52",
      },
    },
  },
});
