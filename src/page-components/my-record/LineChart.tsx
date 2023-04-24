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

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    customCanvasBackgroundColor: {
      color: "#2E2E2E",
    },
    title: {
      text: "BODY RECORD",
      display: true,
      position: "top" as any,
      align: "start" as any,
      color: "white",
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        padding: 40,
      },
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
  lineChartTitle: string;
}

const Button = ({ name }: { name: string }) => {
  return (
    <button className="bg-primary-yellow text-white mx-4 py-0.5 px-6 rounded-3xl hover:bg-white hover:text-primary-yellow">
      {name}
    </button>
  );
};

export function LineChart({
  labels,
  bodyFatData,
  bodyWeightData,
  lineChartTitle,
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

  options.plugins.title.text = lineChartTitle;

  return (
    <div className="relative">
      <div>
        <Line options={options} data={data} className="w-full" />
      </div>
      <div className="absolute bottom-2">
        <Button name="日" />
        <Button name="週" />
        <Button name="月" />
        <Button name="年" />
      </div>
    </div>
  );
}

export default LineChart;
