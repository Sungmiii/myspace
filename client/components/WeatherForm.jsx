import React from 'react'


const WeatherForm = (props) => {
    return (
        <div>
            <form onSubmit={() => props.getWeather(city, country)}>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <button className="formbtn"><span>Get Weather</span></button>
            </form>
        </div>
    )
}

export default WeatherForm