// XDong
import React, { Component } from 'react'
//import Navbar from './components/Movies/Navbar/Navbar'
//import Routes from './components/Movies/Routes/Routes'

// XDong
// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <Navbar />
//         <Routes />
//       </div>
//     )
//   }
// }

//import Homepage from './components/homepage/index'
//import MainCard from './components/reviews/card'
//import AddReview from './components/reviews/review_add'
//import ReviewSearch from './components/reviews/review_search'
//import Movie from './components/Movies/Movie/Movie'

import Analysis from './Components/data_analysis/index'
import BarChart from './Components/data_analysis/bar'


function App() {
    return (
      <div>
        <BarChart year="2020"/>
      </div>
    )
};

export default App;

