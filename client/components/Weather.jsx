import React from 'react'


import WeatherForm from './WeatherForm'
import WeatherData from './WeatherData';

const Weather = (props) => {


    return (
        <section className="weathersection">
            <div className="weathertile"><p>Find out your city weather</p></div>
            <div className="weatherformarea">
                <WeatherForm getWeatherData={props.getWeatherData} city={props.city} country={props.country} />
                {/* {console.log('Weather component function >>>', props.getWeatherData)} */}
                <WeatherData city={props.city} country={props.country} temprature={props.temprature} humidity={props.humidity} />
            </div>
        </section>
    )

}

export default Weather