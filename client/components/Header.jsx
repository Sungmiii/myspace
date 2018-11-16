import React from 'react'

import Nav from './Nav'

// import Logo from '../../server/public/img/logo.gif'
// const Logo = require('svg-inline-loader?./img/logo.svg')


const Header = () => {
    return (
        <header className="heroarea">
            <div className="headercontent">
                <Nav />
                {/* <Logo src={require('svg-inline-loader?./img/logo.svg')} /> */}
                <h1>My Space</h1>

            </div>
        </header>
    )
}

export default Header

