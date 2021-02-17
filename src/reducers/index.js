// Step 2
import {combineReducers} from "redux";
import Posts from "./Posts"
import Comments from "./Comments"
export const reducers = combineReducers ({
    Posts,
    Comments
})