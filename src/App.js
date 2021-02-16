import React, {useEffect} from "react";
import './App.css';
import Posts from './components/Posts/Posts'
// import {Container, AppBar, Typography} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {getPosts} from './actions/Posts'
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

      <h1> Hello we are making project injedia school</h1>
      <div>
      <Posts/>
      </div>
    </div>
  )
    
    
  
}

export default App;
