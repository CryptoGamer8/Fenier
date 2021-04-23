import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Homepage from '../components/homepage/index';
import Showfilms from '../components/Movies/MovieList/MovieList'
import Test from '../components/test/index'
import Movie from '../components/Movies/Movie/Movie'
import AddReview from '../components/reviews/review_add'
import 'antd/dist/antd.css'

function Router(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path='/movielist' render={
                        props => (<Showfilms category='popular'{...props} />) }/>
                    <Route exact path='/movie/:id' component={Movie} />
                    <Route path="/movielocal/:id" component={Test} />
                    <Route path="/addreview/:movieid/:moviename" component={AddReview} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;