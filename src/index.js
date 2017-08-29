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


const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
