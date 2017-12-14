import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

let token = localStorage.token
if(!token)
  token = localStorage.token = Math.random().toString(56).substr(-8)

const headers = {
                    'Accept' : 'application/json',
                    'Authorization' :'token'
                }

export function fetchPosts() {
  const API = 'http://localhost/3001';
//  const key = '?key=PRANAMI';

  const request = axios.get(`${API}/posts`,{headers});
  console.log(request);
  
  return dispatch => {
        request.then(({data}) => {
          dispatch({
            type : FETCH_POSTS,
            payload : data
          })
        })
  }
}
