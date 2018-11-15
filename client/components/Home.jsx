import React from 'react'


import LiveStream from './LiveStream'
import Weather from './Weather'

const Home = () => {
    return (
        <main>
            <section className="mainarea">
                <p>all api area</p>
                <LiveStream />
        
                <Weather />
            </section>
        </main>
    )
}

export default Home