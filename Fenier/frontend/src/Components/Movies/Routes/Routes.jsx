import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Movie from '../Movie/Movie'
import 'antd/dist/antd.css'
import Showfilms from '../movieList/Movielist'

const Routes = () => (
  <Switch>
    <Route exact path='/MovieList' render={
      props => (<Showfilms category='popular'{...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
