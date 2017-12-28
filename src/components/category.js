import React, { Component } from 'react';
import { fetchPostWithCateogry } from '../actions/categories_action';
import { connect } from 'react-redux';

class CategoryView extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.fetchPostWithCateogry(category);
    console.log(category);
  }

    render() {
      const { category } = this.props;
      console.log(category);

      if (!category) {
        return <div>Loading...</div>
      }

      return(
          <div>
            <h3>category.title</h3>
            <h5>category.category</h5>
            <h6>category.body</h6>
          </div>
      );
    }
}

function mapStateToProps({ categories },ownProps) {
    return { category: categories[ownProps.match.params.category]}
}

export default connect(mapStateToProps, {fetchPostWithCateogry})(CategoryView);
