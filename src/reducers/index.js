import {combineReducers} from 'redux';
import CategoryReducer from './categoryReducer';
//import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    categories: CategoryReducer
   // activeUser: ActiveUserReducer
});

export default allReducers