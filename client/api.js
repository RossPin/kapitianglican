import request from 'superagent';

export function addPost(post) {
  return request
    .post('/api/posts/addpost')
    .send(post)
    .then(res => res.body);
}

export function updatePost(post) {
  return request
    .put('/api/posts/updatepost')
    .send(post)
    .then(res => res.body);
}

export function getPosts() {
  return request.get('/api/posts/getposts')
    .then(res => res.body);
}

export function getPost(id) {
  return request.get(`/api/posts/getpost/${id}`)
    .then(res => res.body);
}

export function delPost(postId) {
  return request
    .delete('/api/posts/delpost')
    .send({ postId })
    .then(res => res.body);
}

export function postComment(comment) {
  return request
    .post('/api/posts/postcomment')
    .send(comment)
    .then(res => res.body);
}

function uploadFile(file, signedRequest) {
  return request
    .put(signedRequest)
    .send(file);
}

export function uploadImage(file) {
  return request
    .get(`/api/upload/sign-s3?file-name=${file.name}&file-type=${file.type}`)
    .then(res => uploadFile(file, res.body.signedRequest)
      .then(() => res.body.fileName));
}

export function delFile(fileName) {
  return request
    .delete('/api/upload/delete')
    .send({ fileName })
    .then(res => res.body);
}
