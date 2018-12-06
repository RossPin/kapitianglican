import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Auth/Login'
import NoticeEditor from './NoticeEditor'
import Location from './Location'
import Services from './Services'
import Groups from './Groups'
import Contact from './Contact'

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
          <Route path='/Services' component={Services} />
          <Route path='/Groups' component={Groups} />
          <Route path='/Contact' component={Contact} />
        </div>
      </HashRouter>
    )
  }
}

export default App
