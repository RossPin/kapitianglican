import React from 'react'
import ParishGroups from './sectionComponents/ParishGroups'

const locations = {
  stPauls: {
    name: "St Paul's",
    address: [
      '1 Langdale Ave',
      'Paraparaumu'
    ],
    services: [
      <p><strong>8am - </strong>Holy Communion: <ul><li>1st & 3rd Sundays—Book of Common Prayer</li><li>2nd & 4th Sundays—New Zealand Prayer Book</li></ul></p>,
      <p><strong>9.30am - </strong>Traditional Family service with Holy Communion (with an integrated Children’s programme)</p>,
      <p><strong>11am - </strong>Family service with Holy Communion</p>,
      <p><strong>7pm First Sunday of the month - </strong>Stillpoint (A Contemplative service)</p>,
      <p><strong>4pm Third Sunday of the month - </strong>Messy Church (in the Parish Hall, St Paul’s)</p>
    ],
    search: 'q=st%20pauls%2C%20paraparaumu'
  },
  stMarks: {
    name: "St Mark's",
    address: [
      '330 Rosetta Rd',
      'Raumati Beach',
      'Paraparaumu'
    ],
    services: [
      <p><strong>9.30am - </strong>Traditional Family service with Holy Communion (with an integrated Children’s programme)</p>,
      <p><strong>5pm Every second Sunday of the month - </strong>Choral Evensong</p>
    ],
    search: 'q=st%20marks%2C%20raumati'
  },
  stPeters: {
    name: 'St Peters',
    address: [
      'Beach Road',
      'Paekakariki'
    ],
    services: [
      <p><strong>10am - </strong>Traditional Family service with Holy Communion</p>
    ],
    search: 'q=st%20peters%2C%20paekakariki'
  }
}

class OurChurches extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: 'stPauls'
    }
  }

  componentDidMount () {
    const location = this.props.match.params.location
    this.setState({ location })
  }

  componentWillReceiveProps (newProps) {
    const location = newProps.match.params.location
    this.setState({ location })
  }
  render () {
    const location = this.state.location
    return (
      <div className='ourChurches'>
        <div className='line' />
        <div className='content'>
          <h2>{locations[location].name}</h2>
          <div>
            <img src={`images/${location}.jpeg`} />
            <div className='mapouter'><div className='gmap_canvas'><iframe id='gmap_canvas' src={`https://maps.google.com/maps?${locations[location].search}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' /></div></div>
          </div>
          {locations[location].address.map((line, i) => <span key={i}>{line}<br /></span>)}
          <a id='mapLink' href={`https://maps.google.com/maps?${locations[location].search}`} target='_blank'>Google Maps</a>
          <h3>Sunday Services</h3>
          {locations[location].services}
          <p><strong>Every 5th Sunday of any month there is a Combined Parish Service at St Paul’s at 10am. There are no other services in the Parish on these Sundays.</strong></p>
          <ParishGroups />
        </div>
      </div>
    )
  }
}

export default OurChurches
