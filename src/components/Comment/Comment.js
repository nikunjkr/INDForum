import React, { useEffect } from "react";
import { Divider, Avatar, Grid, Paper, CircularProgress,IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const Comment = ({comment}) => {
  console.log(comment, "inside comments");
    // const imgLink =
    // "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

    return (
    <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
    <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
            {/* <Avatar alt="Remy Sharp" src={comment.user_image} /> */}
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
            </p>
            <IconButton className="post__header__upvote">
            <ThumbUpAltIcon />
          </IconButton>
          {2}
          <IconButton className="post__header__downvote">
            <ThumbDownAltIcon />
          </IconButton>
        </Grid>

    </Grid>
</Paper>)
}

export default Comment;