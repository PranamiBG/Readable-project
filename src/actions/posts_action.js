import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

let token ;
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
const API = 'http://localhost:3001';
const headers = {
                    'Accept' : 'application/json',
                    'Authorization' :'token'
                }

export function fetchPosts() {
  const URL = `${API}/posts`;
  const request = axios.get(URL,{headers});

  return dispatch => {
        return request.then(({data}) => {
          dispatch({
            type : FETCH_POSTS,
            payload : data
          })
        })
  }
}
