import React from 'react';
import './homepage.css';
/*function Slides() {
    return (
        <div>This is slides</div>
    );
}

export default Slides;*/

function initSwiper() {
    var mySwiper = new window.Swiper('.swiper-container', {
      direction: 'horizontal', 
      loop: true, 
  
    
      pagination: {
        el: '.swiper-pagination',
      },
  
   
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
  
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
  export default class Slides extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        bannerList: [],
        parts: []
      }
      this.getMovies = this.getMovies.bind(this)
    }
    componentDidMount() {
      this.getMovies()
    }
    getMovies() {
      fetch('http://www.omdbapi.com/?s=star+wars&page=1&apikey=20c592d9')
      .then(res => res.json())
      .then(r => {
        console.log(r.Search)
        this.setState({
          bannerList: (r.Search.slice(0,3)).map(item => item.Poster)
        })
        let arr = this.state.parts.slice(0)

        this.setState({
          parts: arr
        })
        initSwiper()
      })
      
    }
    render() {
      const { bannerList, parts } = this.state
      return (
        <div className="App">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                bannerList.map((item, index) => <div key={index} className="swiper-slide">
                  <img src={item} alt="" />
                </div>)
              }
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          
        </div>
      );
    }
  
  }
  