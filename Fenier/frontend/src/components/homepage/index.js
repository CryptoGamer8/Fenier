import Newmovie from './newmovie';
import Detail from './detail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Homepage() {
 
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