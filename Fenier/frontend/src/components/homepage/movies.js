import React from 'react';
import './homepage.css';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y]);
function sayHello(name) {
  <h1>1111</h1>
  alert(`hello, ${name}`);
}
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      parts: {
        hotMovies: {
          label: 'Hot Movies',
          list: []
        },
      }
    }
    this.getHotMovies = this.getHotMovies.bind(this)
  }
  componentDidMount() {
    this.getHotMovies()
  }
  getHotMovies() {
    //const { data } = require('./movies.json')



    const {data} = fetch('http://127.0.0.1:8000/movies/all')
    .then(res => res.json())
    .then(r => {
      let hotMovies = {
        label: 'Hot Movies',
        list: r
      }
      this.setState({
        parts: Object.assign(this.state.parts, {hotMovies})
      })
    })
  }
  detailM(e) {
    localStorage.setItem('movie', JSON.stringify(e))
    this.props.history.push('/detail')
  }
  render() {
    const { bannerList, parts } = this.state
    return (
      <div className="App">
        <main>
          <div id="hotMovies" className="container">
            <h1>Hot Movies</h1>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
            >
              {
                //parts.hotMovies.list.map((jtem, jndex) => <SwiperSlide key={jndex}><div data-info={jtem} onClick={this.detailM.bind(this,jtem)}  className="col"></div>
                  parts.hotMovies.list.map((jtem, jndex) => <SwiperSlide key={jndex}><div  className="col">
                  
                    <img src={jtem.img_url} alt="" />
                    <h3>{jtem.name}</h3>
                    <p>{jtem.label}</p>
                    <div className="inf">
                      <span>{jtem.year}</span>
                      {
                        jtem.rates ? <span>score: {jtem.rates} / 10</span> : ''
                      }
                    </div>
                  </div></SwiperSlide>)
                }
            </Swiper>
          </div>
        </main>
      </div>
    );
  }

}
