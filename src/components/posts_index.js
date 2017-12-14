import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts;
    console.log(this.props.posts)
  }

  render() {
    console.log(this.props.posts);

    return(
      <div>
        Posts
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { posts: state.props };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
