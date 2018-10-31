import React from 'react'
import { addPost, updatePost, getPost, delFile } from '../api';
import {connect} from 'react-redux'
import ImageUpload from './ImageUpload';

class NoticeEditor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      text: ''      
    }
    this.unPostedImage = []
    this.removeImages = []
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)    
    this.setImage = this.setImage.bind(this)
    this.componentCleanup = this.componentCleanup.bind(this)
  }

  componentDidMount(){
    !this.props.auth.isAuthenticated && this.props.history.push('/')
    window.addEventListener('beforeunload', this.componentCleanup)
    const id = this.props.match.params.id
    id && getPost(id).then(({title, text, image}) => {
      this.setState({title, text, id, image})
    })
  }

  componentWillUnmount(){
    this.componentCleanup()
    window.removeEventListener('beforeunload', this.componentCleanup)
  }

  componentCleanup(){
    this.unPostedImage.map(fileName => delFile(fileName))
  }

  updateDetails(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  setImage(fileName){
    const {image} = this.state
    if (image) this.removeImages.push(image)
    this.unPostedImage.push(fileName)
    this.setState({image: fileName})
  }

  deleteImage(e, fileName){
    e.preventDefault
    this.removeImages.push(fileName)
    this.setState({image: null})
  }  

  submit(e){
    e.preventDefault()
    const post = this.state
    post.user = this.props.auth.user
    this.removeImages.map(fileName => delFile(fileName))
    this.unPostedImage = []
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
          <ImageUpload setImage={this.setImage}/><br />
          {this.state.image && 
            <div>
            <button onClick={e=>this.deleteImage(e, this.state.image)}>delete image</button><br />
            <img src={`https://kapuploads.s3.amazonaws.com/${this.state.image}`} />
            </div>}
          <label>Notice Content</label><br />
          <textarea className="postInputArea" onChange={this.updateDetails} name="text" value={this.state.text}></textarea><br/>               
        </form>
        <button onClick={this.submit}>Post Notice</button>
        <button onClick={e => {this.props.history.push('/')}}>Back</button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(NoticeEditor)