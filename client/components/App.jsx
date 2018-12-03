import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Header from './Header'

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>         
          <Route path='/' component={Header} />
        </div>
      </HashRouter>   
    )
  }
}

export default App