import React, { useEffect } from "react";
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
import { Line } from "react-chartjs-2";

const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (
    chart: { width?: any; height?: any; ctx?: any },
    args: any,
    options: { color: string }
  ) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#2E2E2E";
    ctx.fillRect(0, 0, chart.width - 5, chart.height - 5);
    ctx.restore();
  },
  defaults: {
    color: "#2E2E2E",
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugin
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    customCanvasBackgroundColor: {
      color: "#2E2E2E",
    },
  },
  scales: {
    // to remove the labels
    x: {
      grid: {
        color: "#777777",
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

interface LineChartProps {
  labels: string[];
  bodyWeightData: number[];
  bodyFatData: number[];
}

export function LineChart({
  labels,
  bodyFatData,
  bodyWeightData,
}: LineChartProps) {
  const data = {
    labels,
    datasets: [
      {
        data: bodyWeightData,
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        data: bodyFatData,
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default LineChart;
