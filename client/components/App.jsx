import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'

import { getWeather } from '../client_api/weather_api'


// import Moment from 'react-moment'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: undefined,
      country: undefined,
      temprature: undefined,
      humidity: undefined,
      currentTime: new Date()
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
    console.log('app getweatherData func working? >>>', this.getWeatherData)
    getWeather(city, country)
      .then(data => {
        console.log('App get the data from api? >>>', data)
        // const kelvin = data.main.temp
        // console.log('original temp', kelvin)
        // const celsius = (kelvin - 273.15);
        this.setState({
          city: data.name,
          country: data.sys.country,
          temprature: data.main.temp,
          humidity: data.main.humidity
        })
      })
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
            <Route exact path="/" render={props => {
              return <Home getWeatherData={this.getWeatherData} temprature={this.state.temprature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} {...props} />
            }} />
            {/* <Moment>{this.state.currentTime}</Moment> */}
            <Footer />
          </div>
        </React.Fragment>
      </HashRouter>
    )
  }
}

export default App

