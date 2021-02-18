import React, {useEffect} from "react";
import './App.css';
import Posts from './components/Posts/Posts'
import PostDetails from './components/PostDetails/PostDetails'
import CommentList from './components/CommentList/CommentList'
// import {Container, AppBar, Typography} from "@material-ui/core"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {useDispatch} from "react-redux"
import {getPosts} from './actions/Posts';
import Routes from './Routes';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // forgot to call
    dispatch(getPosts());
    console.log("Dispatching");
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__header">
          <img className="app__headerImage" src="logo" alt="Logo"/>

      </div>
      <Router>
              <Routes />  
          
       </Router>
      <div>
        {/* <Posts/> */}
      </div>
    </div>
  )
    
    
  
}

export default App;
