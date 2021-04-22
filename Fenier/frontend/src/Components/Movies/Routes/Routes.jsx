import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Movie from '../MovieList/MovieList'
import 'antd/dist/antd.css'
import Showfilms from '../Showfilms/Showfilms'

const Routes = () => (
  <Switch>
    <Route exact path='/MovieList' render={
      props => (<Showfilms category='popular'{...props} />
    )} />
    <Route exact path='/movielist/:id' component={Movie} />
  </Switch>
)

export default Routes
