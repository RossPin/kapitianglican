import React from 'react'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file)
  }

  handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state
    return (
      <div >
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleImageChange(e)} />          
        </form>
        <div className="imgPost">
          {imagePreviewUrl && <img src={imagePreviewUrl} />}
        </div>
      </div>
    )
  }
}

export default ImageUpload