import { combineReducers } from 'redux';
import PostReducer from './PostsReducer';
import { reducer as formReducer} from 'redux-form';
import CategoriesReducer from './CategoriesReducer';

const rootReducer = combineReducers({
    posts: PostReducer,
    categories: CategoriesReducer,
    form : formReducer
});

export default rootReducer;
