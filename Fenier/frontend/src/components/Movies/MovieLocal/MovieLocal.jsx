/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import ListReview from '../../reviews/list_review'
import 'antd/dist/antd.css'
import './Movie.css'

class MovieLocal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
      movie: {
        cast: "",
        genre: "",
        id: "",
        img_url:"",
        movie_url:"",
        name:"",
        outline: "",
        rates: "",
        year: ""
      }
    }
  }
  
  componentDidMount(){
    fetch("http://localhost:8000/movies/id="+this.state.id)
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        movie:{
          cast: res.cast,
        genre: res.genre,
        id: res.id,
        img_url:res.img_url,
        movie_url:res.movie_url,
        name:res.name,
        outline: res.outline,
        rates: res.rates,
        year: res.year
        }
      })
    }).catch(err=>console.log(err))
  }

  render() {
    // return (
    //   <div>
    //     {this.state.id}
    //   </div>
    // )
    return (
      <div>
      <Row>
        <Col span={8} offset={1}>
          <img alt={this.state.movie.name} width='80%' src= {this.state.movie.img_url}/>
        </Col>
        <Col span={12} offset={1}>
          <h1>{this.state.movie.name}</h1>
          <hr />
          <strong>release year</strong>
          <h3>{this.state.movie.year}</h3>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.movie.outline}</p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
            {this.state.movie.genre}
          </div>
          <Rate className='rate' value={this.state.movie.rates} />
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
          <iframe width="650" height="400" src={this.state.movie.movie_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row><br/><br/><br/><br/>
      <h2 style={{"margin-left": "30px"}}>Reviews</h2>
      <ListReview id={this.state.id}></ListReview>
      <button onClick={()=>window.open("/addreview/"+this.state.movie.id+"/"+this.state.movie.name)}>Add Review</button>
      </div>
    )
  }
}

export default MovieLocal;
