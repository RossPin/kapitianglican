const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage })

router.post('/image', upload.single('image'), (req, res) => {       
    res.json({fileName: req.file.filename})    
})

router.delete('/delete', (req, res) => {
  const {fileName} = req.body
  const datapath = path.join(__dirname, `../../public/uploads/${fileName}`)
  if (fileName) fs.unlink(datapath, function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        res.status(400).send({message: "File doesn't exist, won't remove it."})
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        res.status(500).send({message: "Error occurred while trying to remove file"})
    } else {
      console.log(`File Deleted: ${fileName}`)
      res.status(200).send({message: "File Deleted"})
    }
  })
  else res.status(400).send({message: "No file name given"})
})

module.exports = router