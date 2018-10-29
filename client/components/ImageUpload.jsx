import React from 'react'
import { uploadImage } from '../api'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',        
      uploading: false,
      uploaded: false
    }
  }

  handleUpload(e) {
    e.preventDefault()        
    this.setState({uploading: true})    
    uploadImage(this.state.file).then(fileName => {
      this.setState({uploading: false, uploaded: true})
      this.props.setImage(fileName)      
    })
  }

  handleImageChange(e) {
    e.preventDefault()    
    let file = e.target.files[0]   
      this.setState({
        file: file,        
        uploaded: false     
    })  
  }

  render() {
    let {file, uploading, uploaded} = this.state
    return (
      <div >        
          <input type="file" onChange={(e)=>this.handleImageChange(e)} />
          {(file && (!uploaded || uploading)) && <button onClick={(e)=>this.handleUpload(e)}>Upload</button>}
          {uploading && <span>Uploading...</span>}
          
      </div>
    )
  }
}

export default ImageUpload