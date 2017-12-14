import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import Posts from './components/posts_index';
import reducers from './reducers/index.js'

const createStoreWithMiddleware = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
      <BrowserRouter>
        <div>
          <Route path="/" component = { Posts} />
        </div>
      </BrowserRouter>
  </Provider>  , document.getElementById('root'));
