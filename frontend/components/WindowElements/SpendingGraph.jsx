import React, { useState } from "react";
import { Today } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = "Inter";

const SpendingGraph = () => {
  const [view, setView] = useState("Year");

  const handleChange = (event) => {
    setView(event.target.value);
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Entertainment",
        backgroundColor: "rgba(107, 33, 168, 1)",
        borderWidth: 1,
        data: [660, 330, 430, 120, 540, 620, 840],
      },
      {
        label: "Food",
        backgroundColor: "rgba(233, 213, 255, 1)",
        borderWidth: 1,
        data: [30, 140, 520, 740, 330, 900, 700],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    responsive: true,
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          borderDash: [4, 6],
          color: "rgba(148, 163, 184, 0.2)",
        },
      },
    },
  };

  return (
    <Box className="p-5 bg-white rounded-3xl">
      <div className="flex justify-between items-center pb-5">
        <b>Spendings</b>
        <FormControl>
          <InputLabel id="time-range-select">View</InputLabel>
          <Select
            className="w-fill md:w-36 text-sm text-left"
            size="small"
            value={view}
            label="View"
            onChange={handleChange}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <Today className="text-slate-300" />
            //     </InputAdornment>
            //   ),
            // }}
          >
            <MenuItem value={"Week"}>This Week</MenuItem>
            <MenuItem value={"Month"}>This Month</MenuItem>
            <MenuItem value={"Year"}>This Year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Bar datasetIdKey="id" options={options} data={data} />
    </Box>
  );
};

export default SpendingGraph;
