import React from 'react';
import './homepage.css';
import Header from './header/index'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Front from './front';

SwiperCore.use([Navigation, A11y]);

export default class Newmovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: ['./homepage/tom.jpg','./homepage/judas.jpg', './homepage/photo1.jpg'],
      parts: {
        hotMovies: {
          label: 'Hot Movies',
          list: []
        },

      }
    }
    this.getMovies = this.getMovies.bind(this)
    this.getHotMovies = this.getHotMovies.bind(this)
  }
  componentDidMount() {
    this.getMovies()
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
  getMovies() {
    fetch('http://www.omdbapi.com/?s=Batman&page=1&apikey=20c592d9')
    .then(res => res.json())
    .then(r => {
      this.setState({
        bannerList: (r.Search.slice(0,3)).map(item => item.Poster)
      })
      let upcoming = {
        label: 'Upcoming',
        list: r.Search.slice(7,10)
      }
      this.setState({
        parts: Object.assign(this.state.parts, { upcoming })
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
        <Header />
        <Front />
        <main>
          <div id="hotMovies" className="container">
            <h1>Hot Movies</h1>
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              navigation
            >
              {
                  parts.hotMovies.list.map((jtem, jndex) => <SwiperSlide key={jndex}><div data-info={jtem} onClick={this.detailM.bind(this,jtem)}  className="col">
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


          <footer className="container" id="contactUs">
            <h1>Concat Us</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', color: "#707070", alignItems: 'center' }}>
              <div style={{ width: '40%', padding: '40px' }}>
                <h4>About Us</h4>
                <p className="content">We are a new website aimed to help film fans find recommendation resources for quality entertainment. As online aggregator of film website, we provide fans with a comprehensive guide to what’s deserve to watch – and what’s waste time – in theaters and at home. We also serve movie fans with soicial function on our site and through reviews channels. If you’re an entertainment fan looking for a recommendation, or to share an opinion, you’ve come to the right place.</p>
              </div>
              <div className="socialicon" style={{ padding: '0 55px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </footer>
        </main>
      </div>
    );
  }

}
