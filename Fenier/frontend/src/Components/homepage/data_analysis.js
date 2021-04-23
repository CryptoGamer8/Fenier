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
      { value: 2015, label: 2015 },
      { value: 2014, label: 2014 },
      { value: 2013, label: 2013 },
      { value: 2012, label: 2012 },
      { value: 2011, label: 2011 },
      { value: 2010, label: 2010 },
      { value: 2009, label: 2009 },
      { value: 2008, label: 2008 },
      { value: 2007, label: 2007 },
      { value: 2006, label: 2006 }
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