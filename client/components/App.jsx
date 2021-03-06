import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
import Loved4Life from './sectionComponents/Loved4Life'
import PastoralCare from './sectionComponents/PastoralCare'
import MessyChurch from './sectionComponents/MessyChurch'
import VenueHire from './sectionComponents/VenueHire'
import Footer from './Footer'
import AlphaCourses from './sectionComponents/AlphaCourses'
import GamesAfternoon from './sectionComponents/GamesAfternoon'
import SmallGroups from './sectionComponents/SmallGroups'
import ServingKapiti from './ServingKapiti'
import Password from './Password'
import SpiritualDirection from './sectionComponents/SpititualDirection'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/password' component={Password} />
              <Route exact path='/OurChurches' component={OurChurches} />
              <Route path='/Services' component={Services} />
              <Route path='/AboutUs' component={AboutUs} />
              <Route path='/ChildrenAndFamilies' component={ChildrenAndFamilies} />
              <Route path='/WhatsHappening' component={WhatsHappening} />
              <Route path='/Gallery' component={Gallery} />
              <Route path='/FoodCo-op' component={FoodCoOp} />
              <Route path='/Contact' component={Contact} />
              <Route path='/ServingKapiti' component={ServingKapiti} />
              <Route path='/WhosWho' component={WhosWho} />
              <Route path='/WhatWeAreAbout' component={WhatWeAreAbout} />
              <Route path='/SmallGroups' component={SmallGroups} />
              <Route path='/Sundays' component={Sundays} />
              <Route path='/FourPlusMore' component={FourPlusMore} />
              <Route path='/SchoolsSupport' component={SchoolsSupport} />
              <Route path='/PlayGroup' component={PlayGroup} />
              <Route path='/RestHomeMinistry' component={RestHomeMinistry} />
              <Route path='/ParishPrayer' component={ParishPrayer} />
              <Route path='/SpiritualDirection' component={SpiritualDirection} />
              <Route path='/Loved4Life' component={Loved4Life} />
              <Route path='/PastoralCare' component={PastoralCare} />
              <Route path='/MessyChurch' component={MessyChurch} />
              <Route path='/AlphaCourses' component={AlphaCourses} />
              <Route path='/GamesAfternoon' component={GamesAfternoon} />
              <Route path='/VenueHire' component={VenueHire} />
              <Route render={() => <Redirect to='/' />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
/*
import sub from './sectionComponents/sub'
<Route path='/sub' component={sub} />
*/
