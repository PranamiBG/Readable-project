import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';
import { reducer as formReducer} from 'redux-form';
import CategoriesReducer from './CategoriesReducer';
import CommentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
    posts: PostReducer,
    categories: CategoriesReducer,
    comments: CommentsReducer,
    form : formReducer
});

export default rootReducer;
