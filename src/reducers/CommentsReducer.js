import { FETCH_COMMENTS } from '../actions/comment_action';

export default function(state={}, action) {
    switch (action.type) {
      case FETCH_COMMENTS:
          return {comments: {...state.comments, ...action.payload.data}}

      default:
        return state;
    }
}
