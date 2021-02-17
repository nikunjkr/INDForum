import React from 'react';
import {useSelector} from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core';
import Post from "../Posts/Post/Post"
const PostDetails = ({match}) => {

    const name= match.params.postid;

   const posts =useSelector( (state) =>state.Posts);
    console.log(name);
    return (
        // !posts.length ? <CircularProgress/> :(
        //     <Grid className="post" container alignItems="stretch" spacing={3}>
        //         {posts.map((post, key) => (
        //             <Grid key={key} item x3={12} sm={12}>
        //                 <Post post ={post} />
        //             </Grid>
                    
        //         ))}
        //     </Grid>
        // )
        <h1>hi</h1>
        
    )
}
export default PostDetails;
