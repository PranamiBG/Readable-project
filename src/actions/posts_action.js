import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

let token ;
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
const API = 'http://localhost:3001';
const headers = {
                    'Accept' : 'application/json',
                    'Authorization' :'token'
                }



//Action creator for fetching posts from the API server
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

//Action Creator for creating posts
export function createPosts(values, callback) {

  return dispatch => {
    return axios.post(`${API}/posts`,values,{headers})
      .then((data) => {
        callback();
        console.log(data)
      dispatch({
        type: CREATE_POST,
        payload: data
      })
    })
  }
}

//Action Creator for displaying a selected post
export function fetchPost(id) {
    const request = axios.get(`${API}/posts/${id}`,{headers});

    return dispatch => {
      return request.then(({data}) => {
        console.log(data);
        dispatch({
        type: FETCH_POST,
        payload: data
        })
      })
    }
}
