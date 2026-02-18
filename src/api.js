// API client

async function getUser(id) {
  return fetchData(`/api/users/${id}`);
}

async function listPosts() {
  return fetchData('/api/posts');
}

module.exports = { getUser, listPosts };
