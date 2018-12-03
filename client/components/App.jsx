import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>         
          <Route path='/' component={Nav} />
        </div>
      </HashRouter>   
    )
  }
}

export default App