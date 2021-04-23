import React, {Component,useState} from 'react';
import './card.css';
import ReactDOM from 'react-dom';

const PostsData = [
    {
        "category": "La La Land",
        "title": "Fall in La La Love With La La Land!",
        "text": "Director Damien Chazelle’s opus to classic studio musicals isn’t without flaws, but the music and magic triumph over everything.",
        "image": "/imgs/review/lalaland.png"
      },
      {
        "category": "The Godfather",
        "title": "The Godfather: The Top Classic",
        "text": "The intimate camerawork, highlighted by closeups and staging actors as if in a void, creates a sinister edge to every scene.",
        "image": "/imgs/review/godfather.jpg"
      },
      {
        "category": "One Night in Miami",
        "title": "All the acting here is remarkable.",
        "text": "The final moments of One Night in Miami... will haunt you, and they'll remind you: There's still work to do.",
        "image": "/imgs/review/original.jpg"
      }]
  
  // Start App
  
  class MainCard extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-cardlist" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content">
          <h1>Popular Reviews</h1>
          <p>The top reviews of our website</p>          
        </div>
      </section>
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button-primary">
          Find out more
        </button>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
          
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>          
          <h2>{this.props.title}</h2>          
          <p className="body-content">{this.props.text}</p>
  
          <Button />
        </div>
      )
    }
  }
  
  
 class Card extends React.Component {
    render() {
      return (
        <div>
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
        </div>
      )
    }
  }

  export default MainCard;

