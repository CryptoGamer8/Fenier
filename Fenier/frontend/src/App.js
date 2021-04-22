// XDong
import React, { Component } from 'react'
import Routes from './components/Movies/Routes/Routes'
import Homepage from './components/homepage/index'

import Analysis from './components/data_analysis/index'

import Router from './router/index'
import Showfilms from './components/Movies/Showfilms/Showfilms'
import MainCard from './components/reviews/card'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'


function App() {

    return (
      <div>
        <Router/>
      </div>
    )
};

export default App;

