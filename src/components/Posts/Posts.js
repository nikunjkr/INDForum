import React from 'react'
import "./Posts.css"

const Post = () => {
    return (
        <div className="post">
            
            {/* <header --name--badge--time>   */}
            <h4>Posted by nikunj</h4>
            {/* <Body> --content --image</Body> */}
            <h3>This is cool</h3>
            <img className="post__image" src="/Post.jpg" alt="PostImage"/>

            {/* {Footer comments  give rewards} */}
        </div>
    )
}

export default Post;
