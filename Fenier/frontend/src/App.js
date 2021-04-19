import React, {useState} from 'react';
import './App.css';
import BarChart from './components/data_analysis/bar';
import PieChart from './components/data_analysis/pie';

function App() {
  return (
    <div className="App">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <BarChart /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <PieChart />
    </div>
  );
}

export default App;