import React from 'react'

import Weather from './Weather'

const Home = (props) => {
    return (
        <main>
            <section className="mainarea">
                <p>all api area</p>
                <Weather getWeather={props.getWeather} temprature={props.temprature} humidity={props.humidity} city={props.city} country={props.country} />
            </section>
        </main>
    )
}

export default Home