/* @flow */
import React from 'react'

class MovieLocal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: props.id,
      review: {
        cast: "",
        genre: "",
        id: "",
        img_url:"",
        movie_url:"",
        name:"",
        outline:"",
        rates:"",
        reviews_url:"",
        year:""
      }
    }
  }

  componentDidMount(){
    fetch("http://localhost:8000/movies/id="+this.state.id)
    .then(res=>res.json())
    .then(res=>{
      
      this.setState({
        review: res
      })

      console.log(this.state.review.cast)
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
    return (
      <div>
        {this.state.id}
      </div>
    )
  }
}

export default MovieLocal;



