import './data_analysis.css'
import Analysis from '../data_analysis/index'
import {useState} from 'react'
import Select from "react-select";

function HomeAnalysis() {
    const [year, setyear] = useState("2020");
    const options = [
      { value: 2020, label: 2020 },
      { value: 2019, label: 2019 },
      { value: 2018, label: 2018 },
      { value: 2017, label: 2017 },
      { value: 2016, label: 2016 },
      { value: 2015, label: 2015 }
    ];
    const handleTypeSelect = e => {
      setyear(e.value);
    };
  
    return (
      <div>
        <Select
          options={options}
          onChange={handleTypeSelect}
          value={options.filter(function (option) {
            return option.value === year;
          })}
          label="Single select"
        />
  
          <Analysis year={year}/>
      </div>
    );
}

export default HomeAnalysis