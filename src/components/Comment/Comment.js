import React, { useEffect } from "react";
import { Divider, Avatar, Grid, Paper, CircularProgress,IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import moment from 'moment'

import {upvoteComment} from '../../actions/Posts'

const Comment = (props) => {
  
  const dispatch = useDispatch();
  console.log(props, "inside comments");
    // const imgLink =
    // "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

    return (
    <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
    <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
            <Avatar alt="Remy Sharp" src={props?.comment?.user_image} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{props.comment?.name}</h4>
            <p style={{ textAlign: "left", color: "gray" }}>
                {/* {moment(props.comment?.timeCommented).fromNow()} */}
                {(props.comment?.timeCommented)}
            </p>
            <p style={{ textAlign: "left" }}>
                {props?.comment?.comment}
            </p>
            
            <IconButton className="post__header__upvote" onClick={()=>dispatch(upvoteComment(props.comment?.comment_id, "u"))}>
            <ThumbUpAltIcon />
          </IconButton>
          {props.comment?.upVotes-props.comment?.downVotes}
          <IconButton className="post__header__downvote">
            <ThumbDownAltIcon />
          </IconButton>
        </Grid>

    </Grid>
</Paper>)
}

export default Comment;