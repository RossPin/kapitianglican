import React from 'react'

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
  render () {
    const location = this.state.location
    return (
      <div className='location'>
        <div className='details'>
          <h3>Address</h3>
          <p>{locations[location].address.map(line => <span>{line}<br /></span>)}</p>
        </div>
        <div className='mapouter'><div className='gmap_canvas'><iframe width='600' height='500' id='gmap_canvas' src={`https://maps.google.com/maps?${locations[location].search}&t=&z=15&ie=UTF8&iwloc=&output=embed`} frameborder='0' scrolling='no' marginheight='0' marginwidth='0' /></div></div>
      </div>
    )
  }
}

export default Location
