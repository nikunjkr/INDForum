import axios from 'axios';
import Cookies from 'js-cookie';
const API = axios.create({ baseURL: 'https://ec2-52-206-109-241.compute-1.amazonaws.com/team2practo' });

API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
    // req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    Cookies.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMTYxMTc2NTcyNDE2MzgzNjM2NDkiLCJlbWFpbCI6Im5pa3VuamtyMDc4QGdtYWlsLmNvbSIsImlhdCI6MTYxMzg0OTc1OCwiZXhwIjoxNjEzODUzMzU4fQ.pjrx4ZDqE0dZCJadgl6EUVep3mGcZHZa1FcN4r1VjHI')
     req.headers.Authorization = Cookies.get('token');
    // req.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMTYxMTc2NTcyNDE2MzgzNjM2NDkiLCJlbWFpbCI6Im5pa3VuamtyMDc4QGdtYWlsLmNvbSIsImlhdCI6MTYxMzgzNDg4MCwiZXhwIjoxNjEzODM4NDgwfQ.76-J-3veuHiZU2y3-o6S5s4YAAWbVWolaRt-0WGIHVg";
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
export const getUser =() => API.get(`/users`);
