import _ from 'lodash';
import { FETCH_POSTS } from '../actions/posts_action';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
     return {posts: { ...state.posts, ...action.payload }};


    default:
      return state;
  }

}
