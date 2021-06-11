const baseURL = 'https://jsonplaceholder.typicode.com';

const getResource = async (path) => {
  const response = await fetch(`${baseURL}${path}`);
  return await response.json();
}

const getAuthors = () => getResource('/users');
const getPosts = () => getResource('/posts');
const getComments = (postId) => getResource(`/posts/${postId}/comments`);

const api = {
  getAuthors,
  getPosts,
  getComments
}

export default api;
