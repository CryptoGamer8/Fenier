import React, {useState} from 'react';
import './App.css';
import BarChart from './components/data_analysis/bar';
import PieChart from './components/data_analysis/pie';

function App() {
  return (
    <div className="App">
      <iframe width="560" height="315" src={myurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <img src={myimg} alt="avengers"></img><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <BarChart /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <PieChart />
    </div>
  );
}

export default App;