import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, editPost } from '../actions/posts_action';

class PostDetail extends Component {
    componentDidMount() {
        const  { id } = this.props.match.params;
        this.props.fetchPost(id);
        console.log(id)
    }

    //Function for deleting on click using action creator
    onDeleteClick() {
      const { id } = this.props.match.params;
      this.props.deletePost(id, () => {
        this.props.history.push('/');
      });
    }

    onEditClick() {
      const { post } = this.props;
      const { id } = this.props.match.params;
      this.props.editPost(id, () => {
        this.props.history.push(`/edit/${post.id}`);
      });
    }

    render() {
      const { post } = this.props;

      if (!post) {
        return <div>Loading...</div>
      }

      return(
        <div>
          <div>
            <h3>{post.title}</h3>
            <h6>Categories: {post.category}</h6>
            <p>{post.body}</p>
          </div>

          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)} >
            Delete Post
          </button>

          <button
            onClick={this.onEditClick.bind(this)} >
            Edit Post
          </button>
        </div>
      );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost, editPost })(PostDetail);
