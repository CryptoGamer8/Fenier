import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


ReactDOM.render(
// XDong change
  <BrowserRouter>
      <App />
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  document.getElementById('root')
)
