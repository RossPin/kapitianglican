import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Footer extends React.Component {
  constructor (props) {
    super(props)    
  }

  render () {
    return (
      <div>
        {this.props.auth.isAuthenticated &&
        <div className='footer'>
          <div className='left section'>
          <p>Sunday Morning Service times <br />St Peters, Paekakariki, 10am<br />St Marks, Raumati Beach, 9.30am<br />(and 8am first Sunday of the month)<br />St Pauls, Paraparaumu, 8.30am and 10am</p>
          </div>
          <div className='center section'>
            <p>Contact us via the Church Office<br />1 Langdale Ave, Paraparumu<br />04 904 7300<br /><a href='mailto:office@kapitianglican.org.nz' target='_blank'>office@kapitianglican.org.nz</a></p>
          </div>
          <div className='right section'>
          <ul>
            <li><a href='https://www.facebook.com/Anglican-Parish-of-Kapiti-112319898809569/' target='_blank'>Kapiti Anglican Facebook Page</a></li>
            <li><a href='http://movementonline.org.nz/' target='_blank'>Movement Online</a></li>
          </ul>
          </div>
          
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Footer)
