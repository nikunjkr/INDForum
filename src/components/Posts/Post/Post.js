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

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { PostDetails } from "../../PostDetails/PostDetails";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  const postid = post.Post_Id;

//   console.log(Post)

  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  return (
    <Card className="post">
      <CardActionArea>
        {console.log(post.Post_Id)}
        {/* {console.log(JSON.parse(post.Title))} */}
        <div className="post__header">
          <IconButton className="post__header__upvote">
            <ThumbUpAltIcon />
          </IconButton>
          {post.upvotes-post.downvotes}
          <IconButton className="post__header__downvote">
            <ThumbDownAltIcon />
          </IconButton>
          <h4 className="post__header__username">Posted by {post.name}</h4>
        </div>
        <Typography variant="h2" component="h2">
          {post.title}
        </Typography>
       
        <CardMedia
          className={classes.media}
          image={post.image_link}
          title={post.Title}
        />
        {/* <Link to="/:postid/comments">Comments</Link> */}

        {/* <h3>{post.name}</h3> */}
        {/* <img src={post.user_image} alt="Loading"></img> */}

        <h3>{post.caption}</h3>
        <h3>{post.image_Link}</h3>

        <h3>{post.timePosted}</h3>
        {/* <Link to="/{post.Post_Id/comments}" >
           

            <button>Comment</button>
            </Link> */}

        {/* <Router>
                <Link to="/:postid/comments">Comments</Link>
                <Switch>
                    <Route path="/:postid/comments" component={PostDetails} exact/>
                 </Switch>
            </Router> */}
        {/* <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                        <p style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                            sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                            metus, efficitur lobortis nisi quis, molestie porttitor metus.
                            Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                            tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}


                        </p>
                        <img src={post.user_image} alt="Loading"></img>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago
            </p>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                        <p style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                            sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                            metus, efficitur lobortis nisi quis, molestie porttitor metus.
                            Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                            tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago
            </p>
                    </Grid>
                </Grid>
            </Paper> */}
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comments
        </Button  >
       <form>
    <input type="button" value="Home Page" onclick="window.location.href='http://www.wherever.com'"/> 
</form>
        {/* <Link to="/"></Link> */}
      </CardActions>
    </Card>
  );
};

export default Post;
