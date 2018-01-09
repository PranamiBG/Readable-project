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
import CreatePost from './components/new_post';
import EditPost from './components/edit_post';
import PostDetail from './components/post_detail';
import CategoryView from './components/category';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

//const createStoreWithMiddleware = createStore(reducers,applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
      <BrowserRouter>
        <div>
          <Route  path="/new" component={CreatePost} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route exact  path="/" component={Posts} />
          <Route path="/:category/posts" component={CategoryView} />
          <Route path="/edit/" component={EditPost}/>
        </div>
      </BrowserRouter>
  </Provider>  , document.getElementById('root'));
