import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getPosts, delPost,} from '../api'
import TextParser from './TextParser'

class Notices extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }    
  }

  componentDidMount(){
    this.getNotices()    
  }

  getNotices(){
    getPosts().then(posts => {
      this.setState({posts: posts.reverse()})
    })
  }

  delete(postId){
    delPost(postId).then(() => this.getNotices())
  }

  edit(postid){
    this.props.history.push(`/NoticeEditor/${postid}`)
  }

  render(){    
    return (
      <div className='Notices'>        
          {this.props.auth.isAuthenticated && <Link to='/NoticeEditor'>New Notice</Link>}
          {this.state.posts.map(post => (
            <div key={post._id} className="post">
              <h2 className="title">{post.title}{this.props.auth.isAuthenticated && <span> - <button onClick={()=>this.edit(post._id) }>Edit</button> - <button onClick={()=>this.delete(post._id) }>Delete</button></span>}</h2>              
              {post.image && <img src={`https://kapuploads.s3.amazonaws.com/${post.image}`} />}
              <div className="entry">                
                <TextParser text={post.text} />
              </div>        
            </div>
          ))}        
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(Notices)