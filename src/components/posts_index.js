import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../actions/posts_action';
import { fetchCategories } from '../actions/categories_action';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    .then(() => {
      this.setState({
        loading : false
      });
      console.log(this.props.posts)
  });

  this.props.fetchCategories()
  .then(() => {
        console.log(this.props.categories)

});

  }

  showPostDetail() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.fetchPost('8xf0y6ziyjabvozdd253nd');
  }

  render() {
  const obj = this.props.posts.posts;
  const category = this.props.categories.categories;

  let arr, category_object;
  if (obj && category) {
      category_object = Object.values(category);
      console.log(category_object);
     arr = Object.values(obj);  //Converting an Object into an array
  }
  console.log(arr);         //returns the converted array from an object


    return(
      <div className="main">
        <h2 className="header_name">Categories</h2>
              {
                category_object  ?
                <div className="parent">
                { category_object.map((category, index) => {
                  return (
                    <Link
                      className="category"
                      to= "/posts">
                        {category.name}
                    </Link>
                  )
                })
              }
                </div>          :
                <div>
                No categories
                </div>
              }

          <h2 className="header_name">Posts </h2>

              {
                arr               ?
                <div className="card_container">
                { arr.map(post => {
                     return (
                             <li className="card" key={post.id}>
                             <Link
                              to={`/posts/${post.id}`}>



                                <h4 className="post_title"> {post.title} </h4>
                               </Link>
                                <h5 className="post_body">  {post.body} </h5>

                             </li>
                     )

                    })
                  }
                </div>
                                  :
                <div>
                  No Data
                </div>
              }

              <Link
                to="/new">
                <button className="create-post">Create Post</button>
              </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, fetchPosts, fetchCategories }, dispatch);
}

export default connect(mapStateToProps ,mapDispatchToProps)(PostsIndex);
