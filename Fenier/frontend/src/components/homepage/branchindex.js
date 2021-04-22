import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import Index from './index';
import Detail from './detail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Newmovie from './newmovie';

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/" component={Newmovie}/>
        <Route path="/detail" component={Detail}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
