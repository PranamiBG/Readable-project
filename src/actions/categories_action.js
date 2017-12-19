import axios from 'axios';
export const FETCH_CATEGORIES = 'fetch_categories';

let token;
if (!token)
  token = localStorage.token = Math.random().toString(32).substr(-8);
const API = 'http://localhost:3001';
const headers = {
                  'Accept' : 'application/json',
                  'Authorization' : 'token'
}

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
