import {combineReducers} from 'redux';
import CategoryReducer from './categoryReducer';
import PostsReducer from './postsReducer';
import SortReducer from './SortReducer';
import SelectedCategoryReducer from './SelectedCategoryReducer';
import SelectedPostReducer from './SelectedPostReducer';
import SelectedCommentReducer from './SelectedCommentReducer';
import CommentsReducer from './commentsReducer';
import { reducer as reduxFormReducer } from 'redux-form';



const allReducers = combineReducers({
    categories: CategoryReducer,
    posts: PostsReducer,
    sort: SortReducer,
    form: reduxFormReducer,
    selectedCategory: SelectedCategoryReducer,
    selectedPost: SelectedPostReducer,
    selectedComment: SelectedCommentReducer, 
    postComments: CommentsReducer
});

export default allReducers