import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './utilities/Navbar/Navbar'
import './App.css'
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path='/venue/:vid' component={SingleFullVenue} />
      </Router>
    )
  }
}

export default App
