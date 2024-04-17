import React from 'react';

class DataSummary extends React.Component {
  generateSummary(data) {
    if (!data || data.length === 0) {
      return [];
    }

    let onesCount = 0;
    let zerosCount = 0;
    let continuousOnes = 0;
    let continuousZeros = 0;
    let maxContinuousOnes = 0;
    let maxContinuousZeros = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].machine_status === 1) {
        onesCount++;
        continuousOnes++;
        continuousZeros = 0;
        maxContinuousOnes = Math.max(maxContinuousOnes, continuousOnes);
      } else if (data[i].machine_status === 0) {
        zerosCount++;
        continuousZeros++;
        continuousOnes = 0;
        maxContinuousZeros = Math.max(maxContinuousZeros, continuousZeros);
      }
    }

    return [
      { Metric: "Number of 1s", Value: onesCount },
      { Metric: "Number of 0s", Value: zerosCount },
      { Metric: "Max continuous 1s ", Value: maxContinuousOnes },
      { Metric: "Max continuous 0s ", Value: maxContinuousZeros }
    ];
  }

  render() {
    const { data } = this.props;
    const summary = this.generateSummary(data);

    return (
      <div>
        
        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Metric</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.Metric}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataSummary;
