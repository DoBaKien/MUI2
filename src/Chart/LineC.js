import { Box } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
export function LineC({ chartData }) {
  return (
    <Box style={{display:"flex", width:"100%"}} >
      <Line data={chartData} />
    </Box>
  );
}
