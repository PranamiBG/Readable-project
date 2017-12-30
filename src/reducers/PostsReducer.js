import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, CREATE_POST } from '../actions/posts_action';

export default function(state = {posts: [] }, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState  = { ...state,  };
      // newState[post.id] = post;
      // return newState;
      return {...state, [action.payload.id]: action.payload};

    case FETCH_POSTS:
     return {posts: { ...state.posts, ...action.payload }};

    case CREATE_POST:
      return {...state, posts: [...state.posts, ...action.payload]};

     default:
      return state;
  }

}
