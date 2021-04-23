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
      review: {
        genre: "",
        urlImage:"",
        movie_url:"",
        name:"",
        description:"",
        stars:"",
        // reviews_url:"",
        release_date:""
      }
    }
  }
  
  componentDidMount(){
    fetch("http://localhost:8000/movies/id="+this.state.id)
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        urlImage: res.img_url,
        name: res.name,
        stars: res.rates,
        description: res.outline,
        genre: (res.genre: Array<number>),
        release_date: res.year,
        movie_url: res.movie_url
        review: res
      })

      console.log(this.state.review.genre)
      console.log(this.state.review.id)
      console.log(this.state.review.img_url)
      console.log(this.state.review.movie_url)
      console.log(this.state.review.name)
      console.log(this.state.review.outline)
      console.log(this.state.review.rates)
      console.log(this.state.review.reviews_url)
      console.log(this.state.review.year)
    })
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
          <img alt={this.state.review.name} width='85%' src= {this.state.review.urlImage}/>
        </Col>
        <Col span={12} offset={1}>
          <h1>{this.state.review.name}</h1>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.review.description}</p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
            {this.state.review.genre.map(genere => <Tag color={Utils.randomColor()} key={genere.id}>{genere.name}</Tag>)}
          </div>
          <Rate className='rate' value={this.state.review.stars} />
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
          <YouTube movie_url={this.state.review.movie_url} />
        </Col>
      </Row>
    )
  }
}

export default MovieLocal;
