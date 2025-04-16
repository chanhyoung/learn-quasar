function fetchPosts() {
  return posts;
}

function fetchPost(id) {
  console.log('id: ', id);

  const post = posts.find(post => post.id === parseInt(id));

  console.log('post: ', post);
  return post;
}

export { fetchPosts, fetchPost };

const posts = [
  {
    id: 1,
    title: '제목1',
    content: '내용1',
    createdAt: '2025/01/01',
    tags: ['google'],
    accept: true,
  },
  {
    id: 2,
    title: '제목2',
    content: '내용2',
    createdAt: '2025/02/01',
    tags: ['google, apple, twitter, facebook, oracle'],
    accept: true,
  },
  {
    id: 3,
    title: '제목3',
    content: '내용3',
    createdAt: '2025/03/01',
    tags: ['google, apple'],
    accept: true,
  },
  {
    id: 4,
    title: '제목4',
    content: '내용4',
    createdAt: '2025/04/01',
    tags: ['twitter'],
    accept: true,
  },
  {
    id: 5,
    title: '제목5',
    content: '내용5',
    createdAt: '2025/05/01',
    tags: ['oracle'],
    accept: true,
  },
  {
    id: 6,
    title: '제목6',
    content: '내용6',
    createdAt: '2025/06/01',
    tags: ['apple'],
    accept: true,
  },
  {
    id: 7,
    title: '제목7',
    content: '내용7',
    createdAt: '2025/07/01',
    tags: ['google, apple'],
    accept: true,
  },
];
