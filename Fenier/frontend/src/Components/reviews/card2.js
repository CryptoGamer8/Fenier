import React, {Component,useState} from 'react';
import './card.css';



class Card2 extends React.Component {
  render(){
    return(
        <div className="card-list">
        <div className="card">
            <img className="card-image" src="/imgs/review/original.jpg" style={{width: '100%' }}></img>
            <b className="cardbody">
              <h2 className="Tit">One Night in Miami: Remarkable</h2>
              <p>The final moments of One Night in Miami... will haunt you, and they'll remind you: There's still work to do.It is such a good movie.</p>
              <a id="link" target="_blank" href="https://www.nytimes.com/2021/01/14/movies/one-night-in-miami-review.html">Full review</a>
            </b>
        </div>
       </div> 
    )
  }  
}


  export default Card2;