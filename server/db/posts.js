const mongoose = require('./mongooseConnection')

const postSchema = new mongoose.Schema({ title: String, text: String, user: Object})
const Post = mongoose.model('Post', postSchema)

function addPost(post) {  
  const postData = new Post(post)  
  return postData.save()
}

function updatePost(id, title, text) {
  return Post.updateOne({_id: id}, {title, text})
}

function getPost(id) {
  return Post.find({_id: id}).then(posts => posts[0])
}

function getPosts() {
  return Post.find({})
}

function delPost(postId){
  return Post.deleteOne({_id: postId})
}



module.exports = {
  addPost,
  getPost,
  getPosts,
  delPost,
  updatePost
}