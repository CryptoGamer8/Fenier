/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import YouTube from 'react-youtube'
import Utils from '../../../Services/utilsService'
import Api from '../../../Services/dataService'
import './Movie.css'

class MovieLocal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: props.id,
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
      <Row>
        <Col span={8} offset={1}>
          <img alt={this.state.movie.name} width='85%' src= {this.state.movie.img_url}/>
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
            {/* {this.state.movie.genre.map(genere => <Tag color={Utils.randomColor()} key={genere.id}>{genere.name}</Tag>)} */}
          </div>
          <Rate className='rate' value={this.state.movie.rates} />
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
          <iframe width="560" height="315" src={this.state.movie.movie_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row>
    )
  }
}

export default MovieLocal;
