import axios from 'axios';

const API = axios.create({ baseURL: 'http://ec2-52-206-109-241.compute-1.amazonaws.com:3000/team2practo/' });

API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
    // req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    req.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDkxNjU4ODUwMDYxNTQxMTU0MDAiLCJlbWFpbCI6InJhamlzYW52NzdAZ21haWwuY29tIiwiaWF0IjoxNjEzNTY5NjA0LCJleHAiOjE2MTM1NzMyMDR9.7eXFwkzUE2APTyvAHkV-j_nOv0nZBP1_PWKw5B_iuFY";
//   }

  return req;
});


// export const fetchPosts = () => fetch(url).then(res => res.json())
export const fetchPosts = () => API.get('/posts');
// export const fetchPosts = () => axios.get(`${url}/posts`');
// export const fetchPostDetails = (postid) => API.get(`${url}/`)
// export const upVotePost = () => API.patch(url);
// export const getPostComments= (postid) => API.get(`/${postid}/comments`);
export const getPostComments= () => API.get(`/1/comments`);

export const createComment =(newComment) => API.post('/comments');

