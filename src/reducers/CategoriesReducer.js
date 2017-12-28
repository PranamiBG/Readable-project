import _ from 'lodash';
import { FETCH_CATEGORIES, FETCH_PARTICULAR_CATEGORY_POSTS } from '../actions/categories_action';

export default function(state={}, action) {
    switch(action.type) {
      case FETCH_CATEGORIES:
        return {categories: {...state.categories, ...action.payload.data.categories}};
        //return {categories: [...state.categories]};

        case FETCH_PARTICULAR_CATEGORY_POSTS:
        console.log(action.payload);
        return  {...state, [action.payload.data.category]: action.payload.data};

        default:
          return state;
    }
}
