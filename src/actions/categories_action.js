import axios from 'axios';
export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_PARTICULAR_CATEGORY_POSTS = 'FETCH_PARTICULAR_CATEGORY_POSTS';


let token;
if (!token)
  token = localStorage.token = Math.random().toString(32).substr(-8);
const API = 'http://localhost:3001';
const headers = {
                  'Accept' : 'application/json',
                  'Authorization' : 'token'
}

//Action creaor for fetching all the categories available
export function fetchCategories() {
  const URL = `${API}/categories`;
  const request = axios.get(URL,{headers});

  return dispatch => {
        return request.then((data) => {
          dispatch({
            type : FETCH_CATEGORIES,
            payload : data
          })
        })
  }
}

//Action creator to fetch all the available posts for a particular category
export function fetchPostWithCateogry(category) {
  const URL = `${API}/${category}/posts`;
  const request = axios.get(URL,{headers});

  return dispatch => {
      return request.then((data) => {
        console.log(data);
          dispatch({
            type: FETCH_PARTICULAR_CATEGORY_POSTS,
            payload: data
          })
      })
  }
}
