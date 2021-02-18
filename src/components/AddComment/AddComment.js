import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { HouseRounded } from "@material-ui/icons";
import { useState } from "react";

const AddComment = () => {

  const [comment, setComment] =useState({comment : '',comment_id:'', })
  const addComment = 1
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

      />
      <Button variant="contained" color="primary" onClick={addComment}>
        Comment
      </Button>
    </>
  );
};

export default AddComment;

