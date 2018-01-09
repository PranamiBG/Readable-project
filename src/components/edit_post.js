import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost, fetchPost } from '../actions/posts_action';

class EditPost extends Component {
  constructor() {
    super();
    this.renderField = this.renderField.bind(this);
  }

  componentDidMount() {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
      console.log(this.props.fetchPost(id))
  }

  renderField(field) {
    const { post } = this.props;
    console.log(post)
    return(
      <div className="title-design">
          <label className="label-design"> {field.label} </label>
          <input
            type="text"
            className="title-input"
            {...field.input}
            value={post.title}
          />
          <div className="text-help  has-danger">
            {field.meta.touched ? field.meta.error : ''}
          </div>
      </div>
    )
  }

  renderCategory(field) {
    return(
      <div className="title-design">
        <label className="label-design">{field.label} </label>
          <Field name="category" className="title-input" component="select">
            <option></option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </Field>

          <div className="text-help has-danger">
            {field.meta.touched ? field.meta.error : ''}
          </div>
      </div>
    );
  }

  onSubmit(values) {
        var id = Math.random().toString(36).substr(-8);
        var d = new Date().toLocaleTimeString();
        values.id = id;
        values.timestamp = d;
        this.props.createPosts(values, () => {
        this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />

        <Field
          label="Post Content"
          name="body"
          component={this.renderField}
        />

        <Field
          label="Category"
          name="category"
          component={this.renderCategory}
          />


        <button type="submit" className="btn btn-primary">Submit</button>
        <Link  to="/">
          <button className="cancel-button">Cancel</button>
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {} ;

  if (!values.title) {
      errors.title = "Enter a title";
  }

  if (!values.body) {
    errors.body = "Enter some content";
    }

  if(!values.category) {
    errors.category = "Please select a category";
  }

  return errors;
}

export default reduxForm({
  validate : validate,          //validate
  form : 'CreatePostForm'
})(
  connect(null,{ editPost, fetchPost })(EditPost)
);
