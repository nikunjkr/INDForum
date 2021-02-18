import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import CommentList from "./components/CommentList/CommentList";


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact>
        <Posts />
      </Route>
      <Route path="/:postid/comments" component={CommentList} exact />
    </Switch>
  </Router>
);
export default Routes;
