import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Homepage from '../components/homepage/index';
import Showfilms from '../components/Movies/Showfilms/Showfilms'
import Test from '../components/test/index'

function Router(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/movielist"></Route>
                    <Route path="/movie/:id" component={Test} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;