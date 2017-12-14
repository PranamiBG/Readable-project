import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';

const rootReducer = combineReducers({
    posts: PostReducer
});

export default rootReducer;
