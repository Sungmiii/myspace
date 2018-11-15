import React from 'react'

import Weather from './Weather'
import Urban from '../components/urbanDic/App'

const Home = (props) => {
    return (
        <main>
            <section className="mainarea">
                <p>all api area</p>
                <Weather getWeatherData={props.getWeatherData} temprature={props.temprature} humidity={props.humidity} city={props.city} country={props.country} />
                {/* <Urban searchTerm={props.title} title={props.title[0]} /> */}
                <Urban />
            </section>
        </main>
    )
}

export default Home