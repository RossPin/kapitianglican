import React from 'react'
import { Link } from 'react-router-dom'

const locations = {
  stPauls: {
    address: [
      '1 Langdale Ave',
      'Paraparaumu'
    ],
    search: 'q=st%20pauls%2C%20paraparaumu'
  },
  stMarks: {
    address: [
      '330 Rosetta Rd',
      'Raumati Beach',
      'Paraparaumu'
    ],
    search: 'q=st%20marks%2C%20raumati'
  },
  stPeters: {
    address: [
      'Beach Road',
      'Paekakariki'
    ],
    search: 'q=st%20peters%2C%20paekakariki'
  }
}

class Location extends React.Component {
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
      <div className='location'>
        <div className='details'>
          <Link to='/'><h4>BACK</h4></Link>
          <img src={`/images/${location}.jpeg`} />
          <h3>Address</h3>
          <p>{locations[location].address.map((line, i) => <span key={i}>{line}<br /></span>)}</p>
          <h3>Other Locations</h3>
          {location !== 'stPauls' && <span><Link to='/location/stPauls'>St Pauls</Link><br /></span>}
          {location !== 'stMarks' && <span><Link to='/location/stMarks'>St Marks</Link><br /></span>}
          {location !== 'stPeters' && <span><Link to='/location/stPeters'>St Peters</Link><br /></span>}
        </div>
        <div className='mapouter'><div className='gmap_canvas'><iframe id='gmap_canvas' src={`https://maps.google.com/maps?${locations[location].search}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' /></div></div>
      </div>
    )
  }
}

export default Location
