import React from 'react'
import TextParser from './TextParser'

class Notices extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {    
  }   

  render () {
    return (
      <div className='notices'>        
        {this.state.posts.map(post => (
          <div key={post._id} className='post'>
            <h2 className='title'>{post.title}</h2>
            {post.image && <img src={`https://kapuploads.s3.amazonaws.com/${post.image}`} />}
            {post.text && <div className='entry'>
              <TextParser text={post.text} />
            </div>}
          </div>
        ))}
      </div>
    )
  }
}

export default Notices
