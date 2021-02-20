// Step 2
import {combineReducers} from "redux";
import Posts from "./Posts"
import Comments from "./Comments"
import Thread from "./Thread"
export const reducers = combineReducers ({
    Posts :Posts,
    Comments:Comments,
    Thread:Thread
})