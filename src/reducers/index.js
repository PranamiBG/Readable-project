import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';

const rootReducer = combineReducers({
    loading: false,
    posts: PostReducer
});

export default rootReducer;
