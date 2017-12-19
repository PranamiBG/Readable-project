import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts_action';
import { fetchCategories } from '../actions/categories_action';
import _ from 'lodash';


class PostsIndex extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
    .then(() => {
      this.setState({
        loading : false
      });
      console.log(this.props.posts)
  });

  this.props.dispatch(fetchCategories())
  .then(() => {
        console.log(this.props.categories)

});

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
                    <li className="category" key={index} >
                        {category.name}
                    </li>
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
                                <h4 className="post_title"> {post.title} </h4>
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

export default connect(mapStateToProps)(PostsIndex);
