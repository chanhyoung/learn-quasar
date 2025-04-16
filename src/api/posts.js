import { posts } from 'src/api/index';

function getPosts() {
  return posts.get('');
}

function getPostById(id) {
  return posts.get(`/${id}`);
}

function createPost(data) {
  return posts.post('', data);
}

function updatePost(id, data) {
  return posts.put(`/${id}`, data);
}

function deletePost(id) {
  return posts.delete(`/${id}`);
}

export { getPosts, getPostById, createPost, updatePost, deletePost };
