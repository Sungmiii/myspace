import React from 'react'

const WeatherData = (props) => {
    return (
        <div className="weatherdata">
            {props.city && <p>{props.city}</p>}
            {props.country && <p>{props.country}</p>}
            {props.temprature && <p>{props.temprature}</p>}
            {props.humidity && <p>{props.humidity}</p>}
        </div>
    )
}

export default WeatherData