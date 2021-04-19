import React, { Component } from 'react'
import Navbar from './Components/Movies/Navbar/Navbar'
import Routes from './Components/Movies/Routes/Routes'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}