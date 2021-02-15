import React from "react";
import './App.css';
import Post from './components/Posts/Posts'
import {Container, AppBar, Typography} from "@material-ui/core"

const App = () => {

  return (
    <div className="app">
      <div className="app__header">
          <img className="app__headerImage" src="logo" alt="Logo"/>

      </div>

      <h1> Hello we are making project injedia school</h1>
      <div>
      <Post/>
      </div>
    </div>
  )
    
    
  
}

export default App;
