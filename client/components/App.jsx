import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>         
          <Route path='/' component={Header} />          
          <Route exact path='/' component={Home} />
        </div>
      </HashRouter>   
    )
  }
}

export default App