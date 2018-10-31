const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const aws = require('aws-sdk')
const S3_BUCKET = process.env.S3_BUCKET
aws.config.region = 'ap-southeast-2'

// const multer  = require('multer')
// const storage = multer.diskStorage({
//   destination: 'public/uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// const upload = multer({ storage })

// router.post('/image', upload.single('image'), (req, res) => {       
//     res.json({fileName: req.file.filename})    
// })

// router.delete('/delete', (req, res) => {
//   const {fileName} = req.body
//   const datapath = path.join(__dirname, `../../public/uploads/${fileName}`)
//   if (fileName) fs.unlink(datapath, function(err) {
//     if(err && err.code == 'ENOENT') {
//         // file doens't exist
//         res.status(400).send({message: "File doesn't exist, won't remove it."})
//     } else if (err) {
//         // other errors, e.g. maybe we don't have enough permission
//         res.status(500).send({message: "Error occurred while trying to remove file"})
//     } else {
//       console.log(`File Deleted: ${fileName}`)
//       res.status(200).send({message: "File Deleted"})
//     }
//   })
//   else res.status(400).send({message: "No file name given"})
// })

router.delete('/delete', (req, res) => {
  const {fileName} = req.body  
  if (fileName) deleteFile(fileName, (err, data) => {
    console.log(data)
    if (err) res.status(400).send({message: err.message})
    else res.status(200).send({message: "File Deleted"})
  })   
  else res.status(400).send({message: "No file name given"})
})

router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = `${Date.now()}-${req.query['file-name']}`;
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      fileName
    };
    res.json(returnData)    
  });
});

function deleteFile(fileName, CB) {
  const s3 = new aws.S3();
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName   
  };
  s3.deleteObject(s3Params, CB)
}

module.exports = router