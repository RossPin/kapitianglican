import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Auth/Login';
import Register from './Auth/Register';

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div>
          <Nav/>
          <div className="container">                
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
          </div>
        </div>
      </HashRouter>   
    )
  }
}

export default App