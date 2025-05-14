import { Fullscreen } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const resultData = [
  {
    id: 1,
    student_id: "S1001",
    name: "Alice Smith",
    physics: 78,
    chemistry: 85,
    math: 92,
  },
  {
    id: 2,
    student_id: "S1002",
    name: "Bob Johnson",
    physics: 65,
    chemistry: 72,
    math: 80,
  },
  {
    id: 3,
    student_id: "S1003",
    name: "Charlie Brown",
    physics: 90,
    chemistry: 88,
    math: 95,
  },
  {
    id: 4,
    student_id: "S1004",
    name: "Diana Lee",
    physics: 70,
    chemistry: 75,
    math: 68,
  },
  {
    id: 5,
    student_id: "S1005",
    name: "Eve Davis",
    physics: 82,
    chemistry: 79,
    math: 88,
  },
  {
    id: 6,
    student_id: "S1006",
    name: "Frank Miller",
    physics: 55,
    chemistry: 60,
    math: 62,
  },
  {
    id: 7,
    student_id: "S1007",
    name: "Grace Wilson",
    physics: 95,
    chemistry: 92,
    math: 98,
  },
  {
    id: 8,
    student_id: "S1008",
    name: "Henry Moore",
    physics: 68,
    chemistry: 70,
    math: 75,
  },
  {
    id: 9,
    student_id: "S1009",
    name: "Ivy Taylor",
    physics: 88,
    chemistry: 86,
    math: 91,
  },
  {
    id: 10,
    student_id: "S1010",
    name: "Jack Thomas",
    physics: 72,
    chemistry: 68,
    math: 78,
  },
];

const ResultsChart = () => {
  return (
    <div className="p-10">
      <LineChart width={800} height={500} data={resultData}>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"physics"} stroke="red"></Line>
        <Line dataKey={"chemistry"} stroke="yellow"></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </LineChart>
      
      {/* Barchart */}

      <BarChart
        width={900}
        height={400}
        data={resultData}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"math"} barSize={20} fill="#8884d8"></Bar>
        <Bar dataKey={"physics"} barSize={20} fill="blue" />
        <Bar dataKey={"chemistry"} barSize={20} fill="yellow" />
      </BarChart>
    </div>
  );
};

export default ResultsChart;
