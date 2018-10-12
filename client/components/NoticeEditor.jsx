import React from 'react'
import { addPost, updatePost, getPost } from '../api';
import {connect} from 'react-redux'

class NoticeEditor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: ''
      
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount(){
    const id = this.props.match.params.id
    id && getPost(id).then(({title, text}) => {
      this.setState({title, text, id})
    })
  }

  updateDetails(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e){
    e.preventDefault()
    const post = this.state
    post.user = this.props.auth.user
    const handlePost = post.id ? updatePost : addPost
    handlePost(post).then(() => {
      this.props.history.push('/')
    })
  }

  render(){
    return(
      <div>
      <h2 className="title">Notice Editor</h2>        
        <form action="" method="post" onSubmit={this.submit}>
          <input type="text" onChange={this.updateDetails} name="title" value={this.state.title}/><br/>
          <textarea className="postInput" onChange={this.updateDetails} name="text" value={this.state.text}></textarea><br/>
          <input type="submit" value="Post Notice"/>          
        </form>
        <button onClick={e => {e.preventDefault;this.props.history.push('/')}}>Back</button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(NoticeEditor)