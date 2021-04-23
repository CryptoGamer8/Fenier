import React, {Component,useState} from 'react';
import './card.css';



class Card1 extends React.Component {
  render(){
    return(
      <div className="card-list">
        
        <div className="card">
            <img className="card-image" src="/imgs/review/godfather.jpg" style={{width: '100%' }}></img>
            <b className="cardbody">
              <h2 className="Tit">The Godfather: The Top Classic</h2>
              <p>The intimate camerawork, highlighted by closeups and staging actors as if in a void, creates a sinister edge to every scene.</p>
              <a id="link" target="_blank" href="https://mesajournalnews.com/5831/arts-entertainment/the-godfather-a-classic-film-review/">Full review</a>
            </b>
        </div>
        
      </div>
    )
  }  
}


  export default Card1;