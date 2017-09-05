import {combineReducers} from 'redux';
import CategoryReducer from './categoryReducer';
import PostsReducer from './postsReducer';
import SortReducer from './SortReducer';
import SelectedCategoryReducer from './SelectedCategoryReducer';
import { reducer as reduxFormReducer } from 'redux-form';
//import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    categories: CategoryReducer,
    posts: PostsReducer,
    sort: SortReducer,
    form: reduxFormReducer,
    selectedCategory: SelectedCategoryReducer
});

export default allReducers