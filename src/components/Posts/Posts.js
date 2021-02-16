import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useSelector } from "react-redux";
import "./Posts.css"
import Post from './Post/Post' 

const Posts = () => {
    // Allows to extract data from the Redux store state, using a selector function.
    // useSelector() will also subscribe to the Redux store, and run  selector whenever an action is dispatched.
    const posts =useSelector( (state) =>state.Posts);
    // console.log(posts);
    return (
        !posts.length ? <CircularProgress/> :(
            <div className="post">
                {posts.map((post, key) => (
                    <div key={key}>
                        <Post post ={post} />
                    </div>
                    
                ))}
            </div>
        )
        
    )
}

export default Posts;
