import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Header from './Header';
import Splash from './Splash';
import Home from './Home';
import Sidebar from './Sidebar';
import Services from './Services';
import Contact from './Contact';
import Groups from './Groups';
import Values from './Values';

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div id='wrapper'>
          <Header/>
          <Route path='/' component={Nav} />
          <Splash/>          
          <div id="page">            
            <Route exact path='/' component={Home} />
            <Route path='/Services' component={Services} />
            <Route path='/Values' component={Values} />
            <Route path='/Groups' component={Groups} />
            <Route path='/Contact' component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Sidebar/>
          </div>
          
        </div>
      </HashRouter>   
    )
  }
}

export default App