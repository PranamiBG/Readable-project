import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost, submitEditedPost } from '../actions/posts_action';

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: this.props.post.title,
      body: this.props.post.body
    }

    this.renderField = this.renderField.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  componentDidMount() {
      const { id } = this.props.match.params;
      this.props.editPost(id, () => {
      this.props.history.push(`/edit/${id}`)
   console.log(this.props.history)
  })
}

onInputChange(event) {
  this.setState({title: event.target.value})
  console.log(this.state.title)
}

onContentChange(event) {
  this.setState({body: event.target.value});
}

  renderField(field) {
    return(
      <div className="title-design">
          <label className="label-design"> {field.label} </label>
          <input
            type="text"
            className="title-input"
            {...field.input}
            value={this.state.title}
            onChange={this.onInputChange}
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
        const { id } = this.props.match.params;
        const formData = {};
     for (const field in this.refs) {
       formData[field] = this.refs[field].value;
     }
        formData.id = id;
       console.log('-->', formData);
        this.props.submitEditedPost(id, formData, () => {
        this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props, 'kdjfkdfjdkfjkfjkdfjdkfdf')
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>


          <input
            ref="title"
            type="text"
            name="title"
            className="title-input"
            value={this.state.title}
            onChange={this.onInputChange}
          />

          <input
            ref="body"
            type="text"
            name="body"
            className="title-input"
            value={this.state.body}
            onChange={this.onContentChange}
          />

        <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {console.log("Submitted")}}  >Submit</button>

            <Link  to="/">
          <button
          className="cancel-button"
          onClick={() => {console.log("Edit")}}>Cancel</button>
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

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default reduxForm({
  validate : validate,          //validate
  form : 'EditPostForm'
})(
  connect(mapStateToProps, { editPost, submitEditedPost })(EditPost)
);
