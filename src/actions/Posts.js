import * as api from "../api/index.js";

// action creaters return actions
// default keyword showed error
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        console.log(data,"hi");
        dispatch({type:'FETCH_ALL' , payload: data});
    } catch (error) {
        console.log(error);
    }
// return actions;
}
export const getPostComments = () => async (dispatch) => {
    try{
        const {data} =await api.getPostComments();
        dispatch({type:'GET_POST_COMMENTS', payload: data});
    } catch(error){
        console.log(error);
    }
}
export const createComment = (comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(comment);

    dispatch({ type: 'CREATE_COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};