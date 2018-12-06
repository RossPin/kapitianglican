import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/login'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submit (e) {
    e.preventDefault()
    let { username, password } = this.state
    this.props.dispatch(loginUser({ username, password }))
  }
  render () {
    return (
      <div className='content'>
        <form className='Login container' onSubmit={this.submit}>
          <label>Username:
            <input style={{ margin: '0.5vw' }} type='text' name='username' onChange={this.updateDetails} />
          </label><br />
          <label>Password:
            <input style={{ margin: '0.5vw' }} type='password' name='password' onChange={this.updateDetails} />
          </label><br />
          <input className='button' type='submit' />
        </form>
      </div>
    )
  }
}

export default connect()(Login)
