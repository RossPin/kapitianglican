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
import Links from './Links';
import NoticeEditor from './NoticeEditor';

class App extends React.Component{
  render(){
    return (      
      <HashRouter>
        <div id='wrapper'>
          <div className='topBar'>
            <Header/>
            <Route path='/' component={Nav} />
          </div>
          <div className='lowerBar'>
            <Splash/>
          </div>         
          <div id="page">
            <div id='content'>         
              <Route exact path='/' component={Home} />
              <Route path='/Services' component={Services} />
              <Route path='/Values' component={Values} />
              <Route path='/Groups' component={Groups} />
              <Route path='/Contact' component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Links" component={Links} />
              <Route exact path="/NoticeEditor" component={NoticeEditor} />
              <Route path="/NoticeEditor/:id" component={NoticeEditor} />
            </div>
            <div id="sidebar">
              <Links />
            </div>
          </div>
          
        </div>
      </HashRouter>   
    )
  }
}

export default App