import React, { useEffect, useState} from "react";
import { Divider, Avatar, Grid, Paper, CircularProgress,IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import moment from 'moment';
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';



import {upvoteComment} from '../../actions/Posts'

import AddComment from '../AddComment/AddComment'

const Comment = (props) => {
  // console.log("props",props);
  // if(props.comment?.post_id === null || props.comment?.post_id === undefined){
  // localStorage.setItem("post_id", props?.comment?.post_id);
  // }
  
  console.log("seeting local",localStorage.getItem("post_id") )

  // const [color, setColor] = useState('action')
  
  console.log("Seeing the comments of a post",props);

  // const handleReply  = () =>{
  //   document.getElementById("comment-grid").append(
  //     <AddComment/>
  //   )
  // }
  
  const dispatch = useDispatch();
  useEffect(()=>{
    // dispatch(upvoteComment(props.comment?.comment_id, "u"))
    console.log("useEffect in comments")
  },[dispatch,props.comment?.comment_id]);

  console.log(props, "inside comments");
    

    return (
    <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
    <Grid  id="comment-grid" container wrap="nowrap" spacing={2}>
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
            <ThumbUpAltIcon color="primary"/>
          </IconButton >
          {props.comment?.upVotes-props.comment?.downVotes}
          <IconButton className="post__header__downvote">
            <ThumbDownAltIcon />
          </IconButton>
        </Grid>

      
    </Grid>
    {/* <h3>Thread</h3> */}
      <Button size="small" color="black" onClick={()=> {
        localStorage.setItem("post_id", props.comment?.post_id )
        window.location.assign(`/comments/${props.comment?.comment_id}/thread`)}} >View Thread</Button>
</Paper>)
}

export default Comment;