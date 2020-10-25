import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login'

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {username, password} = this.state
    this.props.dispatch(loginUser({username, password}))

  }
  render() {
    return (
      <div className="password">
        <img className='logo' src='images/Kapiti_Anglicans_WordMark_Colour.svg' />
        <h1>Welcome to Kapiti Anglicans</h1>
        <h2>This is the new website under development</h2>
        <h3>Visit our current website at <a href='http://kapitianglican.org.nz'>kapitianglican.org.nz</a>.</h3>
        <h3>Or enter password to preview the new site.</h3>
        <form  onSubmit={this.submit}>
          <label>Password:
            <input style={{margin: '0.5vw'}} type="password" name="password" onChange={this.updateDetails}/>
          </label><br/>
          <input className="button" type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(Password)