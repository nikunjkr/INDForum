import * as api from "../api";

// action creaters return actions
// default keyword showed error
export const getPosts = () => async (dispatch) => {
    try {
        const data = await api.fetchPosts();
        dispatch({type:'FETCH_ALL' , payload:[]});
    } catch (error) {
        console.log(error);
    }
    
    // return actions;
    
}