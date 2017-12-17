import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
    .then(() => {
      this.setState({
        loading : false
      });
      console.log(this.props.posts.posts[0])
    })
  }



  render() {
  console.log(this.props.posts.posts)
    return(

        this.props.posts.posts.map(post => {
          <div>
              post.title
          </div>
        })
      


    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(PostsIndex);
