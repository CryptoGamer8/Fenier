// XDong
import React, { Component } from 'react'

import Homepage from './components/homepage/index'

import Analysis from './components/data_analysis/index'

import Router from './router/index'

import MainCard from './components/reviews/card3'
import AddReview from './components/reviews/review_add'
import ReviewSearch from './components/reviews/review_search'

import CardList from './components/reviews/card_list'

import ListReview from './components/reviews/list_review'
import SingleReview from './components/reviews/single_review'

function App() {
    const a = {
      id: 1,
      user_name: "sss"
    }
    return (
      <div>
        {/* <Router></Router> */}
        <ListReview id="1"/>
        {/* <SingleReview review={a}></SingleReview> */}
      </div>
    )
};

export default App;

