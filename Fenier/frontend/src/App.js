// XDong
import React, { Component } from 'react'
import Navbar from './components/Movies/Navbar/Navbar'
import Routes from './components/Movies/Routes/Routes'

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

import Homepage from './components/homepage/index'
import MainCard from './components/reviews/card'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'
import Analysis from './components/data_analysis/index'
import Movie from './components/Movies/Movie/Movie'

function App() {
    return (
      <div>
        <Homepage/>
      </div>
    )
};

export default App;

