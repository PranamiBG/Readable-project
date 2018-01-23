import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, editPost } from '../actions/posts_action';
import { fetchComments } from '../actions/comment_action';
import { Link } from 'react-router-dom';
import { createStoreWithMiddleware } from '../index.js';

class PostDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      comments: []
    };

    createStoreWithMiddleware.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.

      this.setState({
        comments: createStoreWithMiddleware.getState().comments
      });
    });

    console.log(createStoreWithMiddleware.getState())
  }

    componentDidMount() {
        const  { id } = this.props.match.params;
      //  const { comment_id } = this.props.parentId;
        this.props.fetchPost(id);
        this.props.fetchComments(id)
            .then(() => {
              console.log(this.props.comments)
            });
        console.log(this.props)
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

    onCommentClick() {
      const { comment } = this.props.fetchComments('8xf0y6ziyjabvozdd253nd');
      console.log(comment);

    }

    render() {
      const { post } = this.props;


      console.log(createStoreWithMiddleware.getState());
    //  console.log(comment);
      if (!post) {
        return <div>Loading...</div>
      }

      const id='8xf0y6ziyjabvozdd253nd'

      return(
        <div>
          <div>
            <h3>{post.title}</h3>
            <h6>Categories: {post.category}</h6>
            <p>{post.body}</p>
          </div>

          <h3>Comments</h3>
            <h4>{post.parentId}</h4>

          <Link
          to ={`/posts/${id}/comments`}>
            View
          </Link>

          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)} >
            Delete Post
          </button>

          <button
            onClick={this.onEditClick.bind(this)} >
            Edit Post
          </button>

          {
            (createStoreWithMiddleware.getState().comments) ?

              <div>
                c
              </div>
                                                  :
              <div>
                Null
              </div>

          }

        </div>
      );
    }
}

function mapStateToProps({ posts, comments }, ownProps) {
    return {
      post: posts[ownProps.match.params.id],
      comment: comments[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost, editPost, fetchComments })(PostDetail);
