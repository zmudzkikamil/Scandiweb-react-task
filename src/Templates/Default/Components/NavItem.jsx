import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCategory } from '../../../ContextManager/CurrentCategorySlice';
import styles from './Navigation.module.scss';

export class NavItem extends Component {
  changeCategory = () => {
    this.props.dispatch(changeCategory(this.props.category));
  };
  render() {
    return (
      <Link to={`/${this.props.category}`}>
        <li
          onClick={this.changeCategory}
          className={`${styles.nav__category} ${
            this.props.currentCategory === this.props.category && styles.selected
          }`}>
          {this.props.category}
        </li>
      </Link>
    );
  }
}
const mapStateToProps = (state) => {
  return { currentCategory: state.category.category };
};
export default connect(mapStateToProps)(NavItem)
