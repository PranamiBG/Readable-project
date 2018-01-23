import axios from 'axios';
export const FETCH_COMMENTS = 'fetch_comments';

let token;
if (!token)
  token = localStorage.token = Math.random().toString(32).substr(-8);
const API = 'http://localhost:3001';
const headers = {
                  'Accept' : 'application/json',
                  'Authorization' : 'token'
}

//Action creator for fetching all the comments
export function fetchComments(id) {
  const URL = `${API}/posts/${id}/comments`;
  const request = axios.get(URL, {headers});

  return dispatch => {
    return request.then((data) => {
      console.log(data)
      dispatch({
        type: FETCH_COMMENTS,
        payload: data
      })
    })
  }
}
