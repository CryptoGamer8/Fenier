
import React, {Component,useState} from 'react';
import './card.css';
import ReactDOM, { render } from 'react-dom';


class Card3 extends React.Component {
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
        
      </div>
    )
  }  
}


  export default Card3;

