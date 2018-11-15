import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <div className="gridcontainer">
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
          </div>
        </React.Fragment>
      </HashRouter>
    )
  }
}

export default App

