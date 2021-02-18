import { CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Posts.css";
import Post from "./Post/Post";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/Posts";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // forgot to call
    dispatch(getPosts());
    console.log("Dispatching");
  }, [dispatch]);
  // Allows to extract data from the Redux store state, using a selector function.
  // useSelector() will also subscribe to the Redux store, and run  selector whenever an action is dispatched.
  const posts = useSelector((state) => state.Posts);
  // console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      item
      xs={6}
    //   className="post"
      container
    //   direction="column"
    //   justify="flex-start"
    //   alignItems="center"
        
      spacing={6}
    >
      {posts.map((post, key) => (
        <Grid key={key} item x3={12} sm={12}>
          <Post post={post} />
        </Grid>
      ))}
      {/* <Link to="/:postid/comments">Comments</Link> */}
    </Grid>
  );
};

export default Posts;
