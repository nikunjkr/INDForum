import * as api from "../api/index.js";

// action creaters return actions
// default keyword showed error
export const getPosts = () => async (dispatch) => {
    try {
        // console.log("inactions");
        const {data} = await api.fetchPosts();
        // const data = JSON.parse(data)
        console.log(data,"hi");
        // console.log("inactions");
        dispatch({type:'FETCH_ALL' , payload: data});
    } catch (error) {
        console.log(error);
        // console.log("inactions");
    }
    
    // return actions;
    
}