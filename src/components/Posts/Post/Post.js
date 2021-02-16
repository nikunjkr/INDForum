import React from "react";
const Post = ({post}) => (
    <div className="post">
        {console.log(post.Post_Id)}
        {/* {console.log(JSON.parse(post.Title))} */}
        <div className="post__upvote">
            <button>Upvote</button>
            <h3>{post.upVotes - post.downVotes}</h3>
            <button>Downvote</button>
        </div>
        
        <h1>{post.User_Id}</h1>
        <h3>{post.name}</h3>

        <h3>{post.caption}</h3>
        <h3>{post.image_Link}</h3>
        
        <h3>{post.timePosted}</h3>

        <button>Comment</button>
        
    </div>
   
)

export default Post;