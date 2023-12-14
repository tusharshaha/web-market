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
import { FaChartBar } from "react-icons/fa";

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
  const data: ChartData<"line", number[], unknown> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Profile Views",
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
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <div className="bg-white rounded-md p-4 h-full">
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold flex items-center gap-2 text-lg">
          <FaChartBar />
          Profile Views
        </p>
        <select className="border p-2" name="" id="">
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 6 Months</option>
          <option>This Year</option>
        </select>
      </div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
