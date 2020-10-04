import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import OurChurches from './OurChurches'
import Services from './Services'
import AboutUs from './AboutUs'
import ChildrenAndFamilies from './ChildrenAndFamilies'
import WhatsHappening from './WhatsHappening'
import Gallery from './Gallery'
import Contact from './Contact'

import FoodCoOp from './sectionComponents/FoodCoOp'
import WhosWho from './sectionComponents/WhosWho'
import WhatWeAreAbout from './sectionComponents/WhatWeAreAbout'
import Sundays from './sectionComponents/Sundays'
import FourPlusMore from './sectionComponents/FourPlusMore'
import SchoolsSupport from './sectionComponents/SchoolsSupport'
import PlayGroup from './sectionComponents/PlayGroup'
import RestHomeMinistry from './sectionComponents/RestHomeMinistry'
import ParishPrayer from './sectionComponents/ParishPrayer'
import SpecialEvents from './sectionComponents/SmallGroups'
import Loved4Life from './sectionComponents/Loved4Life'
import PastoralCare from './sectionComponents/PastoralCare'
import MessyChurch from './sectionComponents/MessyChurch'
import Newsletter from './Newsletter'
import Sermons from './Sermons'
import Calendar from './Calendar'
import VenueHire from './sectionComponents/VenueHire'
import Footer from './Footer';
import AlphaCourses from './sectionComponents/AlphaCourses'
import GamesAfternoon from './sectionComponents/GamesAfternoon'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <div className='container'>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route path='/OurChurches/:location' component={OurChurches} />
            <Route path='/ChurchServices' component={Services} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/ChildrenAndFamilies' component={ChildrenAndFamilies} />
            <Route exact path='/WhatsHappening' component={WhatsHappening} />
            <Route path='/WhatsHappening/Newsletter' component={Newsletter} />
            <Route path='/WhatsHappening/sermons' component={Sermons} />
            <Route path='/WhatsHappening/calendar' component={Calendar} />
            <Route path='/Gallery' component={Gallery} />
            <Route path='/FoodCo-op' component={FoodCoOp} />
            <Route path='/Contact' component={Contact} />
            <div>
              <Route path='/WhosWho' component={WhosWho} />
              <Route path='/WhatWeAreAbout' component={WhatWeAreAbout} />              
              <Route path='/Sundays' component={Sundays} />
              <Route path='/FourPlusMore' component={FourPlusMore} />
              <Route path='/SchoolsSupport' component={SchoolsSupport} />
              <Route path='/PlayGroup' component={PlayGroup} />
              <Route path='/RestHomeMinistry' component={RestHomeMinistry} />
              <Route path='/ParishPrayer' component={ParishPrayer} />
              <Route path='/SpecialEvents' component={SpecialEvents} />
              <Route path='/Loved4Life' component={Loved4Life} />
              <Route path='/PastoralCare' component={PastoralCare} />
              <Route path='/MessyChurch' component={MessyChurch} />
              <Route path='/AlphaCourses' component={AlphaCourses} />
              <Route path='/GamesAfternoon' component={GamesAfternoon} />
              <Route path='/VenueHire' component={VenueHire} />
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
/*
import sub from './sectionComponents/sub'
<Route path='/sub' component={sub} />
*/
