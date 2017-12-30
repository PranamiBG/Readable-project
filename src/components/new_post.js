import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions/posts_action';

const uuidv1 = require('uuid/v1'); //For generating unique id for each post

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      selectValue : ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.renderCategory = this.renderCategory.bind(this);
}

  renderField(field) {
      return(
        <div className="title-design">
            <label className="label-design"> {field.label} </label>
            <input
              type="text"
              className="title-input"
              {...field.input}
            />
            <div className="text-help  has-danger">
              {field.meta.touched ? field.meta.error : ''}
            </div>
      </div>
      );
  }

  handleChange(e) {
    const value=e.target.value;
    this.props.change("categories",value);
    this.setState({selectValue: value}, () => {
      console.log(value)
    });
  }

  generateID() {
    return  uuidv1();
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
  connect(null,{ createPosts })(CreatePost)
);
