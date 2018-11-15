import React from 'react'

import Weather from './Weather'
import Urban from '../components/urbanDic/App'

const Home = (props) => {
    return (
        <main>
            <section className="mainarea">
                <p>all api area</p>
                <Urban />
                <Weather getWeather={props.getWeather} temprature={props.temprature} humidity={props.humidity} city={props.city} country={props.country} />
            </section>
        </main>
    )
}

export default Home