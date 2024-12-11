import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../styles/AnalyticChart.css';

const AnalyticChart = () => {
   // Hard coded, starter data, To be changed
  const [data, setData] = useState({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

  const updateData = () => {
    // Currently randomly generates fake data
    const newData = [Math.random() * 100, Math.random() * 100, Math.random() * 100];

    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: newData,
        },
      ],
    });
  };

  return (
    <div className="analyticChart-controls">
      <Doughnut data={data} />
      <button onClick={updateData}>Refresh</button>
    </div>
  );
};

export default AnalyticChart;