import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

import { useSelector } from "react-redux";
// import "./Posts.css"
import Post from '../Posts/Posts' 

const Posts = () => {
    // Allows to extract data from the Redux store state, using a selector function.
    // useSelector() will also subscribe to the Redux store, and run  selector whenever an action is dispatched.
    const posts =useSelector( (state) =>state.Posts);
    // console.log(posts);
    return (
        !posts.length ? <CircularProgress/> :(
            <Grid className="post" container alignItems="stretch" spacing={3}>
                {posts.map((post, key) => (
                    <Grid key={key} item x3={12} sm={12}>
                        <Post post ={post} />
                    </Grid>
                    
                ))}
            </Grid>
        )
   
        
    )
}

export default Posts;
