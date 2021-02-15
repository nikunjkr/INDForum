import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

// STORE -->global state

// ACTION INCREMENT

// Reducer

// Dispach dispach this action to reducer store gets update
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

