import * as api from "../api/index.js";

// action creaters return actions
// default keyword showed error
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        // console.log(data,"secret");
        dispatch({type:'FETCH_ALL' , payload: data});
    } catch (error) {
        console.log(error);
    }
// return actions;
}
export const getPostComments = (post_id) => async (dispatch) => {
    try{
        const {data} =await api.getPostComments(post_id);
      
        dispatch({type:'GET_POST_COMMENTS', payload: data});
    } catch(error){
        console.log(error);
    }
}
export const createComment = (post_id,comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(post_id,comment);
    console.log(data,"secret");
    dispatch({ type: 'CREATE_COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const upvoteComment = (comment_id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteComment(comment_id);

    dispatch({ type: 'UPVOTE_COMMENT', payload: data });
  } catch (error) {
    console.log("error in upvote comments");
  }
};

export const downvoteComment = (comment_id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteComment(comment_id);

    dispatch({ type: 'DOWNVOTE_COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};