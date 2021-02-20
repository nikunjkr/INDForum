import React, { useEffect } from "react";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";
import { LocalFlorist } from "@material-ui/icons";
import commentList from './CommentList';

const CommentList = ({ match }) => {
  //   const posts = useSelector((state) => state.Posts);

  const dispatch = useDispatch();

  const id = match.params.postid;
  var post = null;
  var comment = [];
  useEffect(() => {
    dispatch(getPostComments(id));
    console.log("dispatching getPostComments");
  }, [dispatch, id]);

  const comments = useSelector((state) => state.Comments);
  const posts = useSelector((state) => state.Posts);

  console.log(comments, "Heare are comments");
  // console.log(id);
  // console.log(posts[7]?.post_id);
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]?.post_id == id) {
      post = posts[i];
    }
  }
  for (let i = 0; i < comments.length; i++) {
    if (comments[i]?.post_id == id) {
      comment.push(comments[i]);
    }
  }
  comment.sort((a, b) => (a?.timePosted > b?.timePosted ? -1 : 1));
 
  console.log(post, "new post");
  console.log(comments, "zero");
  return (
    <div style={{  padding: 50 }} className="App">
      <Grid container spacing={3}>
         <Grid item xs={6}>
        {/* !post ? <CircularProgress />:  */}
        <Post post={post} />
        <AddComment post ={post} up_level_cid=''/>
      </Grid>
      </Grid>
     

      {comment.map((comment, key) => (
        <Grid key={key} item xs={9} sm={6}>
          <Comment comment={comment} />
        </Grid>
      ))}


     
    </div>
  );
};
export default CommentList;
