import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Location from './Location'
import Services from './Services'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Header} />
          <Route exact path='/' component={Home} />
          <Route path='/location/:location' component={Location} />
          <Route path='/ChurchServices' component={Services} />
          <Route path='/WhoWeAre' component={WhoWeAre} />
          <Route path='/WhatWeDo' component={WhatWeDo} />
          <Route path='/Contact' component={Contact} />
        </div>
      </HashRouter>
    )
  }
}

export default App
