import React, { useEffect } from "react";
import { Divider, Avatar, Grid, Paper, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import AddComment from '../AddComment/AddComment';
import Comment from "../Comment/Comment";
import { LocalFlorist } from "@material-ui/icons";

const CommentList = ({ match }) => {

//   const posts = useSelector((state) => state.Posts);
    
  const dispatch = useDispatch();
  console.log(match.params.postid);
  // const postid=match.params.postid;
  // console.logd=match.params.postid;
  // post fetch display

  const postid=match.params.postid;

  useEffect(() => {
    dispatch(getPostComments());
    console.log("dispatching getPostComments")
  }, [dispatch]);

  const comments = useSelector((state) => state.Comments);
  console.log(comments, "outside comments");
  // console.log(comments, 'Heare are comments');

  

  
  return (
    <div style={{ padding: 14 }} className="App">

   
     
        {/* <Link to="/:postid/comments">Comments</Link> */}

        <Posts/>
        
     <AddComment/>


      <h1>Comments</h1>
      <Link to="/:postid/comments">Comments</Link>
      <Comment comments={comments}/>
      {/* <Comment/>
      <Comment/> */}
    




    </div>

    // (
    //     !comments.length ? <CircularProgress /> : (
    //         <Grid className="post" container alignItems="stretch" spacing={3}>
    //             {comments.map((comment, key) => (
    //                 <Grid key={key} item x3={12} sm={12}>
    //                     <Comment comment={comment} />
    //                 </Grid>

    //             ))}
    //              {/* <Link to="/:postid/comments">Comments</Link> */}
    //         </Grid>
    //     )

    // )


  );
};
export default CommentList;
