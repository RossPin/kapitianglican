const router = require('express').Router()
const db = require('../db/posts')

router.post('/addpost', (req, res) => {  
  db.addPost(req.body).then(post => {      
    res.json(post)    
  })
})

router.put('/updatepost', (req, res) => {
  const { id, title, text } = req.body
  db.updatePost(id, title, text).then(post => {      
    res.json(post)    
  })
})

router.get('/getpost/:id', (req, res) => {
  const {id} = req.params
  db.getPost(id).then((post) => {
    res.json(post)
  })
})

router.get('/getposts', (req, res) => {
  db.getPosts().then((posts) => {
    res.json(posts)
  })
})

router.delete('/delpost', (req, res) => {
  db.delPost(req.body.postId).then(() => {
    res.sendStatus(200)
  })
})


module.exports = router