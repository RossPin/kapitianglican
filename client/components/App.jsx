import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Auth/Login'
import NoticeEditor from './NoticeEditor'
import Location from './Location'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Header} />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route exact path='/NoticeEditor' component={NoticeEditor} />
          <Route path='/NoticeEditor/:id' component={NoticeEditor} />
          <Route path='/location/:location' component={Location} />
        </div>
      </HashRouter>
    )
  }
}

export default App
