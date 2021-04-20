import Movies from './movies';
import Reviews from './reviews';
import Slides from './slides';
import Contact from './contact';

function Homepage() {
    return (
        <div>
            <Slides />
            <Movies />
            <Reviews />
            <Contact />
        </div>
    );
}

export default Homepage;