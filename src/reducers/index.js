import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';
import CategoriesReducer from './CategoriesReducer';

const rootReducer = combineReducers({
    loading: false,
    posts: PostReducer,
    categories: CategoriesReducer
});

export default rootReducer;
