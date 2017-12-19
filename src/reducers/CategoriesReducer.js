import _ from 'lodash';
import { FETCH_CATEGORIES } from '../actions/categories_action';

export default function(state={}, action) {
    switch(action.type) {
      case FETCH_CATEGORIES:
        return {categories: {...state.categories, ...action.payload.data.categories}};
        //return {categories: [...state.categories]};
        default:
          return state;
    }
}
