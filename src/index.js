import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//--------------------------
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import allReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

//define initialState to ensure that the sortedBy is set, when the page is loading
const initialState = { 
    posts: {sortedBy:"voteScore"}
  };

const store = createStore(allReducers, initialState, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
