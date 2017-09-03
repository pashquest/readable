import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//-----ReactRouter------
import { BrowserRouter } from 'react-router-dom';
//--------------------------
import { createStore, applyMiddleware,compose } from 'redux';
import {Provider} from "react-redux";
import allReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


//define initialState to ensure that the sortedBy is set, when the page is loading
const initialState = { 
    posts: {sortedBy:"voteScore"}
  };

// To be able to use the Redux DevTools next to our Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, initialState, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>    
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
