import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarC({ chartData }) {
  return <Bar data={chartData} style={{display:"flex", width:"100%"}}/>;
}

export default BarC;