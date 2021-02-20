import axios from 'axios';

const API = axios.create({ baseURL: 'http://ec2-52-206-109-241.compute-1.amazonaws.com/team2practo' });

API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
    // req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    req.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMTYxMTc2NTcyNDE2MzgzNjM2NDkiLCJlbWFpbCI6Im5pa3VuamtyMDc4QGdtYWlsLmNvbSIsImlhdCI6MTYxMzgxNDMxOCwiZXhwIjoxNjEzODE3OTE4fQ.CMiuNURrgRINvqUhZgbbYZzEsg6NitI5PWxXBQ3tcZ4";
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
export const createComment =(postid,Comment) => API.post('/comments', {'post_id': postid, 'comment' : Comment});
export const replyComment =(postid,Comment,up_level_cid) => API.post('/comments', {'post_id': postid, 'comment' : Comment, 'up_level_cid' :up_level_cid});
//  forgot / in beginning
export const getThread = (comment_id) => API.get(`/comments/${comment_id}/thread`);