import React from 'react'



import { HashRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

import Moment from 'react-moment'

import { getWeather } from '../client_api/weather_api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: undefined,
      country: undefined,
      currentTime: new Date()
    }
  }

  componentDidMount() {
    console.log('App componentDidMount')
    setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000)

  }
  render() {
    
    return (
      <HashRouter>
        <React.Fragment>
          <div className="gridcontainer">
            <Header />
            <Moment>{this.state.currentTime}</Moment>
            <Route exact path="/" component={Home} />
            <Footer />
          </div>
        </React.Fragment>
      </HashRouter>
    )
  }
}

export default App

