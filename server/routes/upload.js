const router = require('express').Router()
const aws = require('aws-sdk')
const S3_BUCKET = process.env.S3_BUCKET
aws.config.region = 'ap-southeast-2'
const local = process.env.PORT ? '' : 'local-'

router.delete('/delete', (req, res) => {
  const {fileName} = req.body  
  if (fileName) deleteFile(fileName, (err, data) => {    
    if (err) res.status(400).send({message: err.message})
    else res.status(200).send({message: "File Deleted"})
  })   
  else res.status(400).send({message: "No file name given"})
})

router.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = `${local+Date.now()}-${req.query['file-name']}`;
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) res.status(400).send({message: err.message})
    else {
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        fileName
      };
      res.json(returnData)
    }    
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

module.exports = {
  router,
  deleteFile
}