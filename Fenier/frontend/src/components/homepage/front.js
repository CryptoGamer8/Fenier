import React from 'react';

import './homepage.css';

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
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [
        '/imgs/Jiaqi/tom.jpg','/imgs/Jiaqi/judas.jpg', '/imgs/Jiaqi/tw.jpg'
      ],
      parts: [
        {
          label: 'Hot Movies',
          id: 'hotMovies',
          list: []
        }


      ]
    }
  }
  componentDidMount() {
    initSwiper()
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
