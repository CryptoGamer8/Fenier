import React, { Component } from 'react'
import Homepage from './components/homepage/index'
import Analysis from './components/data_analysis/index'
import Router from './router/index'
// import MainCard from './components/reviews/card3'
// import ReviewSearch from './components/reviews/review_search'
// import CardList from './components/reviews/card_list'
// import ListReview from './components/reviews/list_review'
// import SingleReview from './components/reviews/single_review'
// import AddReview from './components/reviews/review_add'
import MovieLocal from './components/Movies/MovieLocal/MovieLocal'

function App() {
    
    return (
      <div>
        {/* <Router></Router> */}
        <MovieLocal id="1"/>
        {/* <ListReview id="1"/> */}
      </div>
    )
};

export default App;