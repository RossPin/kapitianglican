const router = require('express').Router()
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage })

router.post('/image', upload.single('image'), (req, res) => {       
    res.json({fileName: req.file.filename})    
})

module.exports = router