import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Header from './Header';
import Splash from './Splash';
import Home from './Home';
import Sidebar from './Sidebar';

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div id='wrapper'>
          <Header/>
          <Nav/>
          <Splash/>
          <div id="page"></div>
          <div id="page-bgtop">
            <div id="content">
                <Route exact path='/' component={Home} />              
                <Route path="/login" component={Login} />
                <Route path="/Register" component={Register} />
            </div>            
            <Sidebar/>
          </div>
          
        </div>
      </HashRouter>   
    )
  }
}

export default App