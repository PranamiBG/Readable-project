import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './reducers/index.js'
import Posts from './components/posts_index';
import Category from './components/category';
import CreatePost from './components/new_post';
import PostDetail from './components/post_detail';

const createStoreWithMiddleware = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
      <BrowserRouter>
        <div>
          <Route  path="/new" component={CreatePost} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route exact  path="/" component={Posts} />
        </div>
      </BrowserRouter>
  </Provider>  , document.getElementById('root'));
