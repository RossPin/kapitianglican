const mongoose = require('./mongooseConnection')
const fs = require('fs')
const path = require('path')

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
    delImage(posts[0].image)
    return Post.deleteOne({_id: postId})
  })    
}

function delImage(image){
  const datapath = path.join(__dirname, `../../public/uploads/${image}`)
  if (image) fs.unlink(datapath, function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.log("File doesn't exist, won't remove it.")
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.log("Error occurred while trying to remove file")
    } else {
      console.log(`File Deleted: ${image}`)
    }
  })
}



module.exports = {
  addPost,
  getPost,
  getPosts,
  delPost,
  updatePost
}