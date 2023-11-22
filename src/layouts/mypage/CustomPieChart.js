import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';

const data = {
  labels: ['WFH', 'Hybrid', 'Office'],
  datasets: [
    {
      data: [35, 45, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  responsive: true,
};

const CustomPieChart = () => (
  <div style={{ width: '100%', height: 300 }}>
    <Typography variant="h6" align="center" gutterBottom>
      Employees Work Status
    </Typography>
    <Pie data={data} options={options} />
  </div>
);

export default CustomPieChart;
