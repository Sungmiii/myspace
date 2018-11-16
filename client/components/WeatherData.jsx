import React from 'react'

const WeatherData = (props) => {
    return (
        <div className="weatherdata">
            {props.city && <p>City: {props.city}</p>}
            {props.country && <p>Country: {props.country}</p>}
            {props.temprature && <p>Temprature: {props.temprature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
        </div>
    )
}

export default WeatherData