import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

import { getWeather } from '../client_api/weather_api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: undefined,
      country: undefined,
      temprature: undefined,
      humidity: undefined
    }
    this.getWeatherData = this.getWeatherData.bind(this)
  }
  componentDidMount() {
    console.log('App componentDidMount')
    // getWeather()
    //   .then(data => {
    //     console.log('get the data from api? >>>', data)
    //     this.setState({
    //       city: data.name,
    //       country: data.sys.country,
    //       temprature: data.main.temp,
    //       humidity: data.main.humidity
    //     })
    //   })
  }
  getWeatherData(city, country) {
    console.log('app getweatherData func working? >>>', getWeatherData)
    getWeather(city, country)
      .then(data => {
        console.log('App get the data from api? >>>', data)
        this.setState({
          city: data.name,
          country: data.sys.country,
          temprature: data.main.temp,
          humidity: data.main.humidity
        })
      })
  }
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <div className="gridcontainer">
            <Header />
            <Route exact path="/" render={props => {
              return <Home getWeatherData={this.getWeatherData} {...props} />
            }} />
            <Footer />
          </div>
        </React.Fragment>
      </HashRouter>
    )
  }
}

export default App

