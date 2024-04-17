import React, { useEffect, useState } from 'react';
import MachineStatusChart from '../components/MachineStatusChart.js';
import DataSummary from '../components/DataSummary.js';
import Weather from '../components/Weather.js';
//import PlotComponent from '../components/PlotComponent';

const Home=()=>{
    const [machine,setmachine] = useState(null);

  useEffect(() => {
    const fetchMachineStatus=async()=>{
      const response=await fetch('/api/machine')
      const json=await response.json()

      if(response.ok){
       setmachine(json)
      }
    }
    fetchMachineStatus()

  }, []); 

  return (
    <div>
      <h1>Cycle status</h1>
      <MachineStatusChart data={machine} />
      <h1>Data Summary</h1>
      <DataSummary data={machine} />
      <h1>Weather Information</h1>
      <Weather apiKey={'9133ae7a7a774a31a9164016241704'} city={'Pune'} />
    </div>
  )
}
export default Home