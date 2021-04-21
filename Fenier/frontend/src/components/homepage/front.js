import React from 'react';
import './homepage.css';
import Header from './header/index'

  export default class Front extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }


    render() {
      const { bannerList, parts } = this.state
      return (
        <div className="App">
          <Header />
        </div>
      );
    }
  }
  