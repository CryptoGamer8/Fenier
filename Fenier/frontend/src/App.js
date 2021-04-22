// XDong
import React, { Component } from 'react'
import Routes from './components/Movies/Routes/Routes'
import Homepage from './components/homepage/index'
import MainCard from './components/reviews/card'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'
import Analysis from './components/data_analysis/index'
import Movie from './components/Movies/Movie/Movie'
import Router from './router/index'

function App() {

    return (
      <div>
        <Router/>
      </div>
    )
};

export default App;

