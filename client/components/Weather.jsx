import React from 'react'


import WeatherForm from './WeatherForm'


const Weather = (props) => {


    return (
        <section className="weathersection">
            <p>weather api area</p>
            <WeatherForm getWeather={props.getWeather} />
        </section>
    )

}

export default Weather