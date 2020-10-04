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
import PrayersSquares from './sectionComponents/PrayersSquares'
import FuneralMarriageBaptism from './sectionComponents/FuneralMarriageBaptism'
import PastoralCare from './sectionComponents/PastoralCare'
import MessyChurch from './sectionComponents/MessyChurch'
import Newsletter from './Newsletter'
import Magazine from './Magazine'
import Sermons from './Sermons'
import Calendar from './Calendar'
import Evensong from './sectionComponents/Evensong'
import Stillpoint from './sectionComponents/Stillpoint'
import VenueHire from './sectionComponents/VenueHire'
import Footer from './Footer';

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
            <Route path='/WhatsHappening/Magazine' component={Magazine} />
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
              <Route path='/PrayersSquares' component={PrayersSquares} />
              <Route path='/FuneralMarriageBaptism' component={FuneralMarriageBaptism} />
              <Route path='/PastoralCare' component={PastoralCare} />
              <Route path='/MessyChurch' component={MessyChurch} />
              <Route path='/Evensong' component={Evensong} />
              <Route path='/Stillpoint' component={Stillpoint} />
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
