import React from 'react'
import { addPost, updatePost, getPost } from '../api';
import {connect} from 'react-redux'
import ImageUpload from './ImageUpload';

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
    !this.props.auth.isAuthenticated && this.props.history.push('/')
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
      <div className='post'>
      <h2 className="title" style={{marginBottom: '1em'}}>Notice Editor</h2>        
        <form onSubmit={e => {e.preventDefault()}}>
          <label>Notice Title</label><br />          
          <input className="postInput" type="text" onChange={this.updateDetails} name="title" value={this.state.title}/><br/>
          <label>Image</label><br />
          <ImageUpload /><br />
          <label>Notice Content</label><br />
          <textarea className="postInputArea" onChange={this.updateDetails} name="text" value={this.state.text}></textarea><br/>               
        </form>
        <button onClick={this.submit}>Post Notice</button>
        <button onClick={() => {this.props.history.push('/')}}>Back</button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(NoticeEditor)