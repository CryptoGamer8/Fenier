
import React, {Component,useState} from 'react';
import './card.css';
import ReactDOM, { render } from 'react-dom';


class Card extends React.Component {
  render(){
    return(
      <div className="card-list">
        <div className="card">
            <img className="card-image" src="/imgs/review/lalaland.png" style={{width: '100%' }}></img>
            <b className="cardbody">
              <h2 className="Tit">Fall in La La Love With La La Land</h2>
              <p>The intimate camerawork, highlighted by closeups and staging actors as if in a void, creates a sinister edge to every scene.</p>
              <a id="link" target="_blank" href="https://www.rogerebert.com/reviews/la-la-land-2016">Full review</a>
            </b>
        </div>
        <div className="card">
            <img className="card-image" src="/imgs/review/godfather.jpg" style={{width: '100%' }}></img>
            <b className="cardbody">
              <h2 className="Tit">The Godfather: The Top Classic</h2>
              <p>The intimate camerawork, highlighted by closeups and staging actors as if in a void, creates a sinister edge to every scene.</p>
              <a id="link" target="_blank" href="https://mesajournalnews.com/5831/arts-entertainment/the-godfather-a-classic-film-review/">Full review</a>
            </b>
        </div>
        <div className="card">
            <img className="card-image" src="/imgs/review/original.jpg" style={{width: '100%' }}></img>
            <b className="cardbody">
              <h2 className="Tit">One Night in Miami: Remarkable</h2>
              <p>The final moments of One Night in Miami... will haunt you, and they'll remind you: There's still work to do.</p>
              <a id="link" target="_blank" href="https://www.nytimes.com/2021/01/14/movies/one-night-in-miami-review.html">Full review</a>
            </b>
        </div>
        
      </div>
    )
  }  
}


  export default Card;

