// XDong
import React, { Component } from 'react'

import Homepage from './components/homepage/index'

import Analysis from './components/data_analysis/index'

import Router from './router/index'

import MainCard from './components/reviews/card'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'

import Card from './components/reviews/card'


function App() {

    return (
      <div>
        {/* <Router></Router> */}
        <Card/>
      </div>
    )
};

export default App;

