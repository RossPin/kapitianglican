import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Location from './Location'
import Services from './Services'
import WhoWeAre from './WhoWeAre'
import AboutUs from './AboutUs'
import PersonalNeeds from './PersonalNeeds'
import ParishResources from './ParishResources'
import Gallery from './Gallery'
import Contact from './Contact'

import FoodCoOp from './sectionComponents/FoodCoOp'
import WhosWho from './sectionComponents/WhosWho'
import MissionVisionValues from './sectionComponents/MissionVisionValues'
import ParishGroups from './sectionComponents/ParishGroups'
import PlayGroup from './sectionComponents/PlayGroup'
import RestHomeMinistry from './sectionComponents/RestHomeMinistry'
import ParishPrayer from './sectionComponents/ParishPrayer'
import SpecialEvents from './sectionComponents/SpecialEvents'
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
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <div className='container'>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route path='/location/:location' component={Location} />
            <Route path='/ChurchServices' component={Services} />
            <Route path='/WhoWeAre' component={WhoWeAre} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/PersonalNeeds' component={PersonalNeeds} />
            <Route exact path='/ParishResources' component={ParishResources} />
            <Route path='/ParishResources/Newsletter' component={Newsletter} />
            <Route path='/ParishResources/Magazine' component={Magazine} />
            <Route path='/ParishResources/sermons' component={Sermons} />
            <Route path='/ParishResources/calendar' component={Calendar} />
            <Route path='/Gallery' component={Gallery} />
            <Route path='/FoodCo-op' component={FoodCoOp} />
            <Route path='/Contact' component={Contact} />
            <div>
              <Route path='/WhosWho' component={WhosWho} />
              <Route path='/MissionVisionValues' component={MissionVisionValues} />
              <Route path='/ParishGroups' component={ParishGroups} />
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
