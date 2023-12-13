import React from "react";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
  ChartData,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Legend,
  Tooltip
);

const Chart: React.FC = () => {
  const data: ChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [40, 90, 210, 160, 230],
        backgroundColor: "#0bb15324",
        fill: true,
        borderColor: "#03a84e",
        tension: 0.4,
        pointStyle: "circle",
        pointBorderWidth: 4,
        pointBorderColor: "#03a84e",
      },
    ],
  };
  const option = {};
  return (
    <div className="bg-white shadow-md">
      <Line data={data} options={option}></Line>
    </div>
  );
};

export default Chart;
