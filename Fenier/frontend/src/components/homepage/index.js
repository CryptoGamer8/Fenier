import Movies from './movies';
import Reviews from './reviews';
import Slides from './slides';
import Contact from './contact';

function Homepage(props) {
    return (
        <div>
            <Slides />
            <Movies />
            <Reviews />
            <Contact />
            <h1>{props.name}</h1>
        </div>
    );
}

export default Homepage;