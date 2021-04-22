import Movies from './movies';
import Reviews from './reviews';
import Slides from './slides';
import Contact from './contact';
import Front from './front';
import Movie from './movies';
import Newmovie from './newmovie';
import Analysis from './analysis'

function Homepage(props) {
    return (
        <div>
            <Slides />
            <Movies />
            <Reviews />
            <Analysis />
            <Contact />
            <h1>{props.name}</h1>
        </div>
    )
}

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// //<iframe width="560" height="315" src={myurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
// function Homepage() {
//     return (

//                 <div className = "App">
//                     <Front />
//                     <Slides />

//                     <Movie />
//                     <Contact />
                                 
//                 </div>         

//     );
// }

export default Homepage;