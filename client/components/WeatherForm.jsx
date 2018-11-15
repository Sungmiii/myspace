import React from 'react'


const WeatherForm = (props) => {
    return (
        <div>
            <form onClick={() => props.getWeatherData(city, country)}>
                {console.log('weatherform function >>>>', props)}
                <input type="text" name={props.city} placeholder="City" />
                <input type="text" name={props.country} placeholder="Country" />
                <button className="formbtn"><span>Get Weather</span></button>
            </form>
        </div>
    )
}
{/* <form onSubmit={() => props.getWeather(city, country)}></form> */ }

export default WeatherForm