import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Homepage from '../components/homepage/index';

function Router(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;