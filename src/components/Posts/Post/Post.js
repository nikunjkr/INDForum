import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import IconButton from "@material-ui/core/IconButton";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import CardHeader from '@material-ui/core/CardHeader';
import history from '../../../history'

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  const postid = post?.post_id;

  console.log(post)

  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  return (
    <Card className={classes}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={post?.user_image}>
          
          </Avatar>
        }
                title= {post?.name}
></CardHeader>
        {/* {console.log(post?.Post_Id)} */}
        {/* {console.log(JSON.parse(post.Title))} */}
        <div className="post__header">
          {/* <h4 className="post__header__username">Posted by {post?.name}</h4> */}
          <IconButton className="post__header__upvote">
            <ThumbUpAltIcon />
          </IconButton>
          {post?.upvotes-post?.downvotes}
          <IconButton className="post__header__downvote">
            <ThumbDownAltIcon />
          </IconButton>
          
        </div>
        <Typography variant="h3" component="h3">
          {post?.title}
        </Typography>
       
        <CardMedia
          className={classes.media}
          image={post?.image_link}
          title={post?.Title}
        />
        {/* <Link to="/:postid/comments">Comments</Link> */}

        {/* <h3>{post.name}</h3> */}
        {/* <img src={post.user_image} alt="Loading"></img> */}

        <h4>{post?.caption}</h4>
        <h3>{post?.image_Link}</h3>

        <h3>{post?.timePosted}</h3>
       
      <CardActions>
        <Button size="small" color="primary" onClick={() => {
          localStorage.setItem("post_id", {postid})
  window.location.assign(`/${postid}/comments`)
}} >
          {post?.noofcomments} Comments 
          
        </Button  >
       <form>
    
</form>
        {/* <Link to="/"></Link> */}
      </CardActions>
    </Card>
  );
};

export default Post;
