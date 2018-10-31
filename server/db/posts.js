const mongoose = require('./mongooseConnection')
const deleteFile = require('../routes/upload').deleteFile

const postSchema = new mongoose.Schema({ title: String, image: String, text: String, user: Object})
const Post = mongoose.model('Post', postSchema)

function addPost(post) {  
  const postData = new Post(post)  
  return postData.save()
}

function updatePost(id, title, text, image) {
  return Post.updateOne({_id: id}, {title, text, image})
}

function getPost(id) {
  return Post.find({_id: id}).then(posts => posts[0])
}

function getPosts() {
  return Post.find({})
}

function delPost(postId){
  return Post.find({_id: postId}).then(posts => {
    const {image} = posts[0]
    if (image) deleteFile(image, (err) => {
      if (err) console.log('Error deleting file')
      else console.log(`Deleted file: ${image}`)
    })
    return Post.deleteOne({_id: postId})
  })    
}

module.exports = {
  addPost,
  getPost,
  getPosts,
  delPost,
  updatePost
}