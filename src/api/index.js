import axios from 'axios';

const API = axios.create({ baseURL: 'http://ec2-52-206-109-241.compute-1.amazonaws.com:3000/team2practo/' });

API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
    // req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    req.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDkxNjU4ODUwMDYxNTQxMTU0MDAiLCJlbWFpbCI6InJhamlzYW52NzdAZ21haWwuY29tIiwiaWF0IjoxNjEzNjM4NjA5LCJleHAiOjE2MTM2NDIyMDl9.-yaPGSH5xJH4B8QKKFyQuA83A5X1Hk7ecV8gyQN0Jf8";
//   }

  return req;
});


// export const fetchPosts = () => fetch(url).then(res => res.json())
export const fetchPosts = () => API.get('/posts');
// export const fetchPosts = () => axios.get(`${url}/posts`');
// export const fetchPostDetails = (postid) => API.get(`${url}/`)
export const upvoteComment = (comment_id) => API.put('/comments/uord', {'comment_id':comment_id,
    'upordown':'u'});
    
export const getPostComments= (postid) => API.get(`/${postid}/comments`);

export const downvoteComment = (comment_id) => API.put('/comments/uord', {'comment_id':comment_id,
    'upordown':'d'});

export const createComment =({post_id,newComment}) => API.post('/comments', {post_id: post_id, comment : newComment});

