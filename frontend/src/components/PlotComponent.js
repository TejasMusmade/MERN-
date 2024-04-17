// PlotComponent.jsx
import React from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';

const PlotComponent = ({ data }) => {
  if (!data || data.length === 0) {
    // Handle case where data is null or empty
    return <div>No data available</div>;
  }

  // Function to determine color based on machine status
  const getColor = (status) => {
    if (status === 0) return 'yellow';
    if (status === 1) return 'green';
    return 'red'; // Handle missing status
  };

  // Process data for plotting
  const plotData = data.map(item => ({
    x: [moment(item.ts).format('YYYY-MM-DD HH:mm:ss')],
    y: [item.machine_status],
    type: 'scatter',
    mode: 'markers',
    marker: { color: getColor(item.machine_status) },
  }));

  return (
    <div>
      <h2>Horizontal Time Scale Plot</h2>
      <Plot
        data={plotData}
        layout={{
          title: 'Vibration Data',
          xaxis: { type: 'date' },
          yaxis: { title: 'Vibration' },
        }}
      />
    </div>
  );
};

export default PlotComponent;
