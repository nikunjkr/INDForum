import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { HouseRounded } from "@material-ui/icons";
import { useState } from "react";
import {createComment} from '../../actions/Posts'
import { useDispatch, useSelector } from 'react-redux';


const AddComment = (props) => {
  // console.log(props.post?.post_id,"adding comments")
  const postid=props.post?.post_id;
  const dispatch = useDispatch();
  const [comment, setComment] =useState('');

  const clear = () => {
    setComment('');
    
  };
  const handleAddComment = async(e) => {
    e.preventDefault();
    dispatch(createComment( postid, comment));
    clear();
  }

  // useEffect(()=>{
  
  // })
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        margin="normal"
        label="Comment as "
        multiline
        rows={4}
        // defaultValue="Default Value"
        variant="outlined"
        size="medium"
        fullWidth
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Comment
      </Button>
    </>
  );
};

export default AddComment;

