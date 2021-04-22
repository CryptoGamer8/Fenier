import Movies from './movies';
import Reviews from './reviews';
import Slides from './slides';
import Contact from './contact';
import Front from './front';
import Movie from './movies';
import Newmovie from './newmovie';
import Detail from './detail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//<iframe width="560" height="315" src={myurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
function Homepage() {
    let App= <div className = "App">
        <Newmovie />
    </div>;
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Newmovie}/>
                <Route path="/detail" component={Detail}/>
            </Switch>
        </Router>
    )
}
export default Homepage;